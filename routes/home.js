const express = require('express');
const router = express.Router();
const { addUserFlight } = require('../controllers/userFlightController');
const { getAllRecommendations, getRecommendationDetails} = require('../controllers/recommendationsController');

const validation = require('../util/validation');
const Joi = require('joi');

router.get('/', async(req, res, next) => {
    try {
        let recommendations = await getAllRecommendations();
        res.render('index', { recommendations: recommendations });
    } catch (e) {
        next(e);
    }
});

router.get('/recommendation/:id', async(req, res) => {
    let recommendation = await getRecommendationDetails(req.params.id);
    res.render('recommendation-details', { recommendation: recommendation });
});

router.get('/purchase-complete', (req, res) => {
    res.render('purchase-complete');
});

router.get('/check-in/:id', (req, res) => {
    res.render('check-in');
});

router.get('/check-list/:id', (req, res) => {
    res.render('check-list');
});

router.get('/tickets', (req, res) => {
    res.render('tickets');
});

router.get('/boarding-pass/:id', (req, res) => {
    res.render('boarding-pass');
});

router.post('/user-flights', [validation({
    body: {
        user_id: Joi.any().required(),
        pnr: Joi.any().required(),
        flight_id: Joi.string().optional(),
        flight_status: Joi.string().optional()
    }
})], addUserFlight);

module.exports = router;