require('dotenv').config();
const express = require('express');
const routes = require('./routes');

// Import sequelize connection
const sequelize = require('./config/config');

const PORT = process.env.PORT || 3002;

// Create express app
const app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test API endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Ecommerce API' });
});

// Use routes
app.use('/api', routes);

// Sync sequelize models then start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
