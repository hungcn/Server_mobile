const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(morgan('short'));

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mobile'
    });
}

app.get('/', (req, res) => {
    res.send('Hello there! I\'m a newbie here. Testing')
});

app.post('/student_create', (req, res) => {
    console.log('Trying to create a new student');
    const mssv = req.body.mssv;
    const hoten = req.body.hoten;
    var sql_query = 'INSERT INTO student (MSSV, HoTen) VALUES (?, ?)';
    getConnection().query(sql_query, [mssv, hoten], function (err, results, fields) {
        if (err) {
            console.log('Failed to insert new student: ' + err);
            res.sendStatus(500);
            return;
        }
        console.log('Inserted a new student with mssv: ' + mssv);
        res.end();
    });
});

app.get('/api/students/:number', (req, res) => {

    var conn = getConnection();

    conn.connect(function (err) {
        if (err) throw err.stack;
        // console.log('Connect to database successfully.');

        var sql_query = 'SELECT * FROM student LIMIT ' + req.params.number;
        conn.query(sql_query, function (err, rows, fields) {
            if (err) {
                // console.log('Failed to query for data.');
                res.end();
            }
            // console.log('select sucessful.');
            var students = {count: rows.length, rows}
            res.json(students);
        });
    });

    // conn.end(function (err) {
    //     if (err) throw err;
    //     console.log('Closed connection.');
    // });

    // res.end();

});


const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));