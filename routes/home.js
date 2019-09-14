const express = require('express');
const router = express.Router();
const { addUserFlight } = require('../controllers/userFlightController');
const validation = require('../util/validation');
const Joi = require('joi');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/recommendation/:id', (req, res) => {
    res.render('recommendation-details');
});

router.get('/purchase-complete', (req, res) => {
    res.render('purchase-complete');
});

router.get('/check-in', (req, res) => {
    res.render('check-in');
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