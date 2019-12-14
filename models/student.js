var db = require('../DBconnection');

var Student = {
    getAllStudent: function (callback) {
        return db.query('SELECT * FROM student', callback);
    },
    getNStudent: function (number, callback) {
        return db.query('SELECT * FROM student LIMIT ' + number, callback);
    },
    addStudent: function (student, callback) {
        return db.query('INSERT INTO student (MSSV, HoTen) VALUES (?, ?)', [student.mssv, student.hoten], callback);
    },
    deleteStudent: function (mssv, callback) {
        return db.query("DELETE FROM student WHERE mssv=?", [mssv], callback);
    },
    updateStudent: function (student, callback) {
        return db.query("UPDATE student SET HoTen=? WHERE mssv=?", [student.hoten, student.mssv], callback);
    }
};
module.exports = Student;