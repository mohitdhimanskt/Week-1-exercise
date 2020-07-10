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

//creating the tables

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'hyfuser',
  password : 'hyfpassword',
  database : `${dbName}`
});

  const create_tables_query =[
    "create table Invitee (invitee_no int not null, invitee_name varchar(50) not null, invited_by varchar(50))",
    "create table Room (room_no int not null, room_name varchar(50) not null, floor_number int)",
    "create table Meeting (meeting_no int not null, meeting_title varchar(50) not null, starting_time time)"
]
  create_tables_query.forEach(table => {
    connection.query(table, function (error, results){
      if(error){
        throw error;

      }
      console.log("Table created");
    });
  })