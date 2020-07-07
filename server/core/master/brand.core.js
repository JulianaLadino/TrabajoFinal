const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { product } = require('../index.core');
const brand = connectionMysql.define(
  "master.brand",
  {
    description: {
      type: sequelize.STRING(1000),
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);
brand.sync();

module.exports = {
    brand,
};
