const {Recommendations} = require('../models/index');

module.exports = {

    getAllRecommendations: async (req, res, next) => {
        return Recommendations.findAll();
    }
};
