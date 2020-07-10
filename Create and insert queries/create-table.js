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

// populating  the tables with data. could have made a new file for this data, opted for the latter.

const Invitee=[
  {invitee_no : '01' , invitee_name : 'Goku', invited_by : 'supreme kai'},
  {invitee_no : '02' , invitee_name : 'Vegeta', invited_by : 'supreme kai'},
  {invitee_no : '03' , invitee_name : 'Gohan', invited_by : 'supreme kai'},
  {invitee_no : '04' , invitee_name : 'Trunks', invited_by : 'supreme kai'},
  {invitee_no : '05' , invitee_name : 'Krillin', invited_by : 'supreme kai'},
]

const rooms = [
  {room_no : '101', room_name : 'Earth', floor_number : 11},
  {room_no : '102', room_name : 'Vegeta', floor_number : 12},
  {room_no : '103', room_name : 'Namek', floor_number : 13},
  {room_no : '104', room_name : 'Heaven', floor_number : 14},
  {room_no : '105', room_name : 'Sadala', floor_number : 15},
]

const meetings = [
  {meeting_no : '21', meeting_title : 'Dealing with Raditz', starting_time : '09:00'},
  {meeting_no : '22', meeting_title : 'Vegeta and Nappa', starting_time : '10:00'},
  {meeting_no : '23', meeting_title : 'Frieza and the Ginyu force', starting_time : '11:00'},
  {meeting_no : '24', meeting_title : 'Cell attacks', starting_time : '12:00'},
  {meeting_no : '25', meeting_title : 'Majin Buu', starting_time : '15:00'},  
]