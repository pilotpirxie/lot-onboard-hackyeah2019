const {UserFlights, Recommendations} = require('../models/index');

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
    getAllTickets: async (user_id) => {
        return UserFlights.findAll({
            where: {
                user_id: user_id
            }
        });
    },
    getFlight: async (flight_id) => {
        return UserFlights.findOne({
            where: {
                id: flight_id
            }
        });
    }
};
