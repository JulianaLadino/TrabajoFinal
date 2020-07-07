const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { 
    brand,
    color,
    category
} = require('../index.core');
const product = connectionMysql.define(
  "store.product",
  {
    idBrand: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    idColor: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    idCategory: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize.STRING(1000),
        allowNull: false,
    },
    quantity: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
); 
// product.hasOne(color);
// product.hasOne(category);
// product.hasOne(brand);
product.sync();

module.exports = {
    product,
};
