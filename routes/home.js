const express = require('express');
const router = express.Router();
const {addUserFlight} = require('../controllers/userFlightController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/user-flights', (req, res) => {

    addUserFlight(req, res)

});

module.exports = router;
