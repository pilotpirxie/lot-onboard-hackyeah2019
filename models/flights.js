module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user_flights', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        from: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        to: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        date_start: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        date_end: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        checklist: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'user_flights'
    });
};