const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { product } = require('../index.core');
const color = connectionMysql.define(
  "master.color",
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
color.sync();

module.exports = {
    color,
};
