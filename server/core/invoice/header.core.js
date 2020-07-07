const {
  connectionMysql,
} = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const header = connectionMysql.define(
  "invoice.header",
  {
    idUser: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
header.sync();
// header.hasOne(user);

module.exports = {
  header,
};
