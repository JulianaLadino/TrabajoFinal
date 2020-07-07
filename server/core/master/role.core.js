const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const sequelize = require("sequelize");
const {userByRole} = require('../index.core');
const role = connectionMysql.define(
  "master.role",
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
// role.role.hasOne(userByRole, {foreignKey: 'idRole', as: 'role'});
role.sync();

module.exports = {
    role,
};

