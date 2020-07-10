var  mysql  = require('mysql');

var connection = mysql.createConnection({
  host :'localhost',
  user : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'

});
connection.connect();


