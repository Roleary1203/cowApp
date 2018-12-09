var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'ryan',
  password: '',
  database: 'cows',
  port: 8080
});

connection.connect();

module.exports = connection;