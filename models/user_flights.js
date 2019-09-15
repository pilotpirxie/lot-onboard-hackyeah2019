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
            allowNull: true
        },
        flight_status: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        pnr: {
            type: DataTypes.STRING(256),
            allowNull: true,
            defaultValue: null
        },
        from: {
            type: DataTypes.STRING(256),
            allowNull: true,
            defaultValue: null
        },
        to: {
            type: DataTypes.STRING(256),
            allowNull: true,
            defaultValue: null
        },
        departure_time: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        arrival_time: {
            type: DataTypes.STRING(256),
            allowNull: true,
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
        }
    }, {
        tableName: 'users_flights'
    });
};