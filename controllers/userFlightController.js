const {UserFlights} = require('../models/index');

module.exports = {

    addUserFlight: async (req, res, next) => {
        await UserFlights.create({
            user_id: req.body.user_id,
            pnr: req.body.pnr
        });
    },
};
