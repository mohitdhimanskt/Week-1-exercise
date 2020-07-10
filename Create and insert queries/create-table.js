  const  mysql = require('mysql');
 
  // creating the database.

  let dbName = 'meetup';

  var connection  = mysql.createConnection({
    host : 'localhost',
    user : 'hyfuser',
    password : 'hyfpassword',
  }); 

  connection.connect();

  connection.query(`create database ${dbName}`, function(error, results){
    if (error){
      throw error
    }
    console.log("Database created")
  })

