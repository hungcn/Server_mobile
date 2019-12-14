const express = require('express');
const router = express.Router();
const Student = require('./Models/student');

router.get('/student/:number?', function (req, res) {
    if (req.params.number) {
        Student.getNStudent(req.params.number, function (err, rows) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            var result = { count: rows.length, rows };
            res.json(result);
        });
    }
    else {
        Student.getAllStudent(function (err, rows) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            var result = { count: rows.length, rows };
            res.json(result);
        });
    }
});

router.post('/student', function (req, res) {
    Student.addStudent(req.body, function (err, count) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
        res.end();
    });
});

router.delete('/student/:mssv', function (req, res) {
    Student.deleteStudent(req.params.mssv, function (err, count) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
        res.end();
    });
});

router.put('/student', function (req, res) {
    Student.updateStudent(req.body, function (err, rows) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
        res.end();
    });
});

module.exports = router;