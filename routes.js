const express = require('express');
const router = express.Router();
const Student = require('./Models/student');

function message(flag, res) {
    return { status: flag, result: res };
}

router.get('/student/:number?', function (req, res) {
    if (parseInt(req.params.number) < 0) {
        res.status(400).send(message(false));
        return;
    }
    if (req.params.number) {
        Student.getNStudent(req.params.number, function (err, rows) {
            if (err) {
                res.status(500).send(message(false));
            }
            else {
                var result = { count: rows.length, rows };
                res.status(200).send(message(true, result));
            }
        });
    }
    else {
        Student.getAllStudent(function (err, rows) {
            if (err) {
                res.status(500).send(message(false));
            }
            else {
                var result = { count: rows.length, rows };
                res.status(200).send(message(true, result));
            }
        });
    }
});

router.post('/student', function (req, res) {
    var isnum = /^\d+$/.test(req.body.mssv);
    if (!isnum) {
        res.status(400).send(message(false));
        return;
    }
    Student.addStudent(req.body, function (err, count) {
        if (err) {
            res.status(500).send(message(false));
        }
        else {
            res.status(201).send(message(true));
        }
    });
});

router.delete('/student/:mssv', function (req, res) {
    if (parseInt(req.params.number) < 0) {
        res.status(400).send(message(false));
        return;
    }
    Student.deleteStudent(req.params.mssv, function (err, count) {
        if (err) {
            res.status(500).send(message(false));
        }
        else {
            res.status(200).send(message(true));
        }
    });
});

router.put('/student/:mssv', function (req, res) {
    if (parseInt(req.params.number) < 0) {
        res.status(400).send(message(false));
        return;
    }
    Student.updateStudent(req.params.mssv, req.body, function (err, rows) {
        if (err) {
            res.status(500).send(message(false));
        }
        else if (rows.affectedRows > 0) {
            res.status(200).send(message(true));
        }
        else res.status(200).send(message(false));
    });
});

module.exports = router;