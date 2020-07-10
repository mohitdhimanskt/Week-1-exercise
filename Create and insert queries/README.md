Exercise 1: Create and insert queries

Write a JavaScript file (to be executed with Node.js) that creates and makes a connection to a MySQL database. Do so using the mysql package (https://www.npmjs.com/package/mysql).

Remember, It's always better to test your queries as soon as you have created them. Feel free to first write them in any sql viewer tool or mysql console before writing the node program.

    Create a database called meetup
    Make a connection to your database, using your MySQL hyfuser login credentials
    Create a table called Invitee with the following fields (invitee_no, invitee_name and invited_by).
    Create a table called Room with the following fields (room_no, room_name and floor_number)
    Create a table called Meeting with the following fields (meeting_no, meeting_title, starting_time, ending_time,room_no)
    Insert 5 rows into each table with relevant fields. Find a way to create the data for those fields
    Test your code by executing node <FILE_NAME> in the terminal. Then check your MySQL database and see if everything has been created as expected. Please, be sure your file can be run more than once. You can drop and create the database every time the file is run.
