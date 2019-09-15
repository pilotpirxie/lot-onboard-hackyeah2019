module.exports = function(sequelize, DataTypes) {
    return sequelize.define('recommendations', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        from: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
        to: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        image_url: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        price: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        start: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        end: {
            type: DataTypes.STRING(256),
            allowNull: true
        }
    }, {
        tableName: 'recommendations'
    });
};