const sql = require('../config/sequelize.config');
const Users = require('../models/users')(sql.connection, sql.dataTypes);
const Sessions = require('../models/sessions')(sql.connection, sql.dataTypes);
const Groups = require('../models/groups')(sql.connection, sql.dataTypes);
const UserGroups = require('../models/user_groups')(sql.connection, sql.dataTypes);
const UserFlights = require('../models/user_flights')(sql.connection, sql.dataTypes);
const Achievements = require('../models/achievements')(sql.connection, sql.dataTypes);
const UserAchievements = require('../models/user_achievements')(sql.connection, sql.dataTypes);
const Recommendations = require('../models/recommendations')(sql.connection, sql.dataTypes);

module.exports = {
    Users,
    Sessions,
    Groups,
    UserGroups,
    UserFlights,
    Recommendations,
    Achievements,
    UserAchievements
};