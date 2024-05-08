const mysql = require('mysql2');

// Create a connection pool with the promise wrapper
const pool = mysql.createPool({
  host: 'localhost',
  user: 'debian-sys-maint',
  password: 'alhaR2PRYw7t5LdM',
  database: 'Products'
}).promise();

module.exports = pool;

