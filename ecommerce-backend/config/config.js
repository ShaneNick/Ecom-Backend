// Require dotenv for environment variables
require('dotenv').config(); 

// Get environment variables
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Import Sequelize
const Sequelize = require('sequelize');

// Create connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

// Export connection 
module.exports = sequelize;