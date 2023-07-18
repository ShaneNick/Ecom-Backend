const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class Tag extends Model {}

Tag.init({

  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  tag_name: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {

  sequelize,
  tableName: 'tags',
  timestamps: false

});

module.exports = Tag;