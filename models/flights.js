module.exports = function(sequelize, DataTypes) {
    return sequelize.define('flights', {
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
        checklist: {
            type: DataTypes.TEXT,
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
        }
    }, {
        tableName: 'flights'
    });
};