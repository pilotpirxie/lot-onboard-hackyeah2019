const express = require('express');
const router = express.Router();
const { addUserFlight } = require('../controllers/userFlightController');
const { getAllRecommendations, getRecommendationDetails } = require('../controllers/recommendationsController');
const checkIn = require('../controllers/checkInController');
const validation = require('../util/validation');
const Joi = require('joi');
const authorisationMiddleware = require('../util/authorisationMiddleware');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', [csrfProtection, authorisationMiddleware], async(req, res, next) => {
    try {
        let recommendations = await getAllRecommendations();
        res.render('index', { recommendations: recommendations });
    } catch (e) {
        next(e);
    }
});

router.get('/recommendation/:id', [csrfProtection, authorisationMiddleware], async(req, res) => {
    let recommendation = await getRecommendationDetails(req.params.id);
    res.render('recommendation-details', { recommendation: recommendation });
});

router.get('/purchase-complete', [csrfProtection, authorisationMiddleware], (req, res) => {
    res.render('purchase-complete');
});

router.get('/check-in/:id', [csrfProtection, authorisationMiddleware], checkIn.getData);

router.get('/check-list/:id', [csrfProtection, authorisationMiddleware], (req, res) => {
    res.render('check-list');
});

router.get('/tickets', [csrfProtection, authorisationMiddleware], (req, res) => {
    res.render('tickets');
});

router.get('/boarding-pass/:id', [csrfProtection, authorisationMiddleware], (req, res) => {
    res.render('boarding-pass');
});

router.get('/achievements', [csrfProtection, authorisationMiddleware], (req, res) => {
    res.render('achievements');
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