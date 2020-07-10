var  mysql  = require('mysql');

var connection = mysql.createConnection({
  host :'localhost',
  user : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'

});
connection.connect();


//Q1 - greater than 8mil

let q1 = "select name, population from country where population > 8000000 order by population "

connection.query(q1, function (error, results, fields){
if(error){
  throw error;
}
console.log("Q1 answer", results );
});

