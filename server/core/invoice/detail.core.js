const {
  connectionMysql,
} = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const { header, product } = require("../index.core");
const detail = connectionMysql.define(
  "invoice.detail",
  {
    idProduct: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    idHeader: {
      type: sequelize.INTEGER,
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
detail.sync();
// detail.hasOne(header);
// detail.hasOne(product);

module.exports = {
  detail,
};
