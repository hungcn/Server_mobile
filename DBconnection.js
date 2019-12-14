const mysql = require('mysql');

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

module.exports = sql_connection;

