const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.quizzes = require('./quiz')(sequelize, Sequelize);
    module.exports = db;

    Sequelize.STRING
    Sequelize.STRING(1234)
    Sequelize.STRING.BINARY
    Sequelize.TEXT
    Sequelize.TEXT('tiny')
    Sequelize.BIGINT
    Sequelize.BIGINT(11)
    Sequelize.FLOAT
    Sequelize.FLOAT(11)
    Sequelize.FLOAT(11, 10)
    Sequelize.DOUBLE
    Sequelize.DOUBLE(11)
    Sequelize.DOUBLE(11, 10)
    Sequelize.DECIMAL
    Sequelize.DECIMAL(10, 2)
    Sequelize.DATEONLY
    Sequelize.BOOLEAN
    Sequelize.ENUM('value 1', 'value 2')
    Sequelize.JSON
