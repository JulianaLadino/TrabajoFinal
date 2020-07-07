const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { product } = require('../index.core');
const staging = connectionMysql.define(
  "store.staging",
  {
    idProduct: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);
// staging.hasOne(product);
staging.sync();

module.exports = {
    staging,
};
