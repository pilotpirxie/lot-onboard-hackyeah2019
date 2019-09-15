const config = require('../config/config');
const {Users, Sessions} = require('../models/index');

module.exports = {
  getData: async (req, res, next) => {
    try {
      try {
        const user = await Users.findOne({
          where: {
            id: req.session.userData.userId
          }
        });
        res.render('check-in', {
          user,
          metadata: config.METADATA,
          currentYear: (new Date).getFullYear(),
          csrf: req.csrfToken(),
          check_id: req.params.id
        });
      } catch (err) {
        next(err);
      }
    } catch(err) {
      next(err);
    }
  }
};