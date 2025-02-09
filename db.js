
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',        
  user: 'root',             
  password: 'Pandu@123',
  database: 'blood_bank', 
  port: 3306                
});

// Connection to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Export the connection for use in routes
module.exports = connection;
