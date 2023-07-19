const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Product = require('./Product');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  as: 'tagged_products'
});

module.exports = Tag;