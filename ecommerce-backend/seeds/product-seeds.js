const { Product } = require('../models');

const productData = [
  {
    product_name: 'iPhone 12',
    price: 999.99,
    stock: 20,
    category_id: 1, // Electronics
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Samsung Galaxy S21',
    price: 799.99,
    stock: 15,
    category_id: 1, // Electronics
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'MacBook Pro',
    price: 2399.99,
    stock: 10,
    category_id: 1, // Electronics
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'T-Shirt',
    price: 19.99,
    stock: 50,
    category_id: 2, // Clothing
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Jeans',
    price: 49.99,
    stock: 30,
    category_id: 2, // Clothing
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Running Shoes',
    price: 79.99,
    stock: 25,
    category_id: 2, // Clothing
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'PlayStation 5',
    price: 499.99,
    stock: 8,
    category_id: 3, // Home (assuming you meant video game consoles)
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Xbox Series X',
    price: 499.99,
    stock: 8,
    category_id: 3, // Home
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Nintendo Switch',
    price: 299.99,
    stock: 12,
    category_id: 3, // Home
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Garden Chair',
    price: 49.99,
    stock: 20,
    category_id: 4, // Garden
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    product_name: 'Basketball',
    price: 29.99,
    stock: 15,
    category_id: 5, // Sports
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
