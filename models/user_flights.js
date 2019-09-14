module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users_flights', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        flight_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        flight_status: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        pnr: {
            type: DataTypes.STRING(256),
            allowNull: true,
            defaultValue: null
        }
    }, {
        tableName: 'users_flights'
    });
};