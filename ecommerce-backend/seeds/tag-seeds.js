const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'wireless',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'Bluetooth',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'organic',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'eco-friendly',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'new',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'vintage',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'discounted',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'high-tech',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    tag_name: 'limited edition',
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
