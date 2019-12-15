const mysql = require('mysql');

// Connect to database in localhost phpAdmin mySql
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mobile'
});

function sql_connection() {
    return pool;
}

module.exports = sql_connection();

