const {Recommendations} = require('../models/index');

module.exports = {

    getAllRecommendations: async (req, res, next) => {
        return Recommendations.findAll();
    },

    getRecommendationDetails: async(id) => {
    return Recommendations.findOne({
        where: {
            id:id
        }
    });
    }
};
