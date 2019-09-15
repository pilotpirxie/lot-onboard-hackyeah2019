const {UserFlights, Recommendations, UserAchievements, Achievements} = require('../models/index');

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
    },
    getUserAchievements: async (user_id) => {
        let achievements = [];

        let user_achievements = await UserAchievements.findAll({
            where: {
                user_id: user_id
            }
        });

        for (i = 0; i < user_achievements.length; i++) {
            let achievement = await Achievements.findOne({
                where: {
                    id: user_achievements[i].achievement_id
                }
            });

            achievements.push(achievement)

        }
        return achievements;
    }
};
