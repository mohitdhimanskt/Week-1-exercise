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

// Q2- land in name

let q2 = "select name from country where name like '%land%'"

connection.query(q2, function (error, results, fields){
  if(error){
    throw error;
  }
  console.log("Q2 answer ", results);
});

//Q3 - population between 500k & 1Mil

let q3 = "select name from country where population between 500000 and 1000000"

connection.query(q3, function (error, results, fields){
  if(error){
    throw error;
  }
  console.log("Q3 answer ", results);
});

//Q4 - countries in the EU

let q4 = "select name from country where continent ='europe'"

connection.query(q4, function (error, results, fields){
  if(error){
    throw error;
    
  }
  console.log("Q4 answer ", results);
});

