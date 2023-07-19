// index.js
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

// Export models
module.exports = {
  Category,
  Product,
  Tag,
  ProductTag
};
