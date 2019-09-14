const {UserFlights} = require('../models/index');

module.exports = {

    addUserFlight: async (req, res, next) => {
        try {
            await UserFlights.create({
                user_id: req.body.user_id,
                pnr: req.body.pnr
            });
            res.send("USER Flight added")
        } catch (e) {
            throw new Error('Problem with saving.')
        }
    },
    getUserFlights: async (req, res, next) => {
        try {
            await UserFlights.create({
                user_id: req.body.user_id,
                pnr: req.body.pnr
            });
        } catch (e) {
            res.send

        }
    },
};
