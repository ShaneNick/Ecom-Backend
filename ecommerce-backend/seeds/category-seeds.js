const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Clothing',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Home',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Garden',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category_name: 'Sports',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
