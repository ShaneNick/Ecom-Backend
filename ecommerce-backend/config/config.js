require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: true 
});

module.exports = sequelize;
