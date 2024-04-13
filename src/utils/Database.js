const config = require('../config');
const mysql = require('mysql2');

module.exports = mysql.createPool({
  connectionLimit : 3,
  host : config.mysqlHost,
  user : config.mysqlUser,
  password : config.mysqlPassword,
  database : config.mysqlDatabase,
  port : config.mysqlPort
});

