const { connectionMysql } = require("../../infraestructure/connection.infraestructure");
const {user, role} = require('../index.core')
const Sequelize = require("sequelize");
const userbyrole = connectionMysql.define(
  "user.userbyrole",
  {
    idUser: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idRole: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
); 
// userbyrole.hasOne(user);
// userbyrole.belongsTo(user, {as: 'user', foreignKey: 'idUser'});
// userbyrole.belongsTo(role, {as: 'user', foreignKey: 'idRole'});
userbyrole.sync();

module.exports = {
  user,
};
