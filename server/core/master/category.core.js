const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { product } = require('../index.core');
const category = connectionMysql.define(
  "master.category",
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
category.sync();

module.exports = {
    category,
};
