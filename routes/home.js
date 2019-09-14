const express = require('express');
const router = express.Router();
const { addUserFlight } = require('../controllers/userFlightController');
const { getAllRecommendations } = require('../controllers/recommendationsController');

const validation = require('../util/validation');
const Joi = require('joi');

router.get('/', async (req, res, next) => {
    try {
        let recommendations = await getAllRecommendations();
        res.render('index', {recommendations: recommendations});
    } catch (e) {
        next(e);
    }
});

router.get('/recommendation/:id', (req, res) => {
    res.render('recommendation-details');
});

router.get('/purchase-complete', (req, res) => {
    res.render('purchase-complete');
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