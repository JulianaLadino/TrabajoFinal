const Sequelize = require('sequelize');

const connectionMysql = new Sequelize('babyStore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connectionMysql
  .authenticate()
  .then(()=>console.log('connection has been successfull')) 
  .catch(err => console.error(err))


  module.exports = {
    connectionMysql
  }