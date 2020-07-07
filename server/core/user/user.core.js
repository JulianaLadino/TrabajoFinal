const { connectionMysql } = require('../../infraestructure/connection.infraestructure');
// const {userByRole} = require('../index.core');
const sequelize = require('sequelize');
const user = connectionMysql.define(
  'user.user',
  {
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING(5000),
      allowNull: false,
    },
    password: {
        type: sequelize.STRING(5000),
        allowNull: false,
      },
    role: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    active: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    freezeTableName: true,
  }
);

// user.user.hasOne(userByRole, {foreignKey: 'idUser', as: 'user'});
user.sync();

module.exports = {
  user
}
