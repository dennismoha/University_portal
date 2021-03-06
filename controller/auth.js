/*
    THIS IS FILE CONSISTS OF USER SIGNUP AND LOGIN LOGIC.
*/
/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const auth = require('./Helper/AuthHelper')

// @RULE: REGISTER STUDENTS

exports.createUser = async(req, res, next) => {
    let { Email, reg_num, password } = req.body;
    console.log('req body is ', req.body)
    delete req.body.confirm_password
    const sql = {
        checkUser: "select Email,reg_num from student_auth WHERE Email = ? or reg_num = ?",
        quer: [req.body.Email, req.body.reg_num],
        registerUser: "call career.studentRegisters(?, ?,?)",
        querBody: req.body,
    };

    return auth.signUp(req, res, sql);
};

// @LOGIN
exports.userLogin = (req, res, next) => {
    let queryBody = req.body
    let sql = {
        query: "SELECT * from student_auth WHERE Email  = ?",
        queryBody
    }
    return auth.login(req, res, sql);
}


// @RULE : FETCH A SINGLE USER
exports.singleUser = (req, res, next) => {
    const userIds = req.userId;
    console.log("userID :", req.userId);

    db.execute(
            "call career.singleUser(?, @fname, @last_names, @Emails, @reg_nums, @campuss, @colleges, @courses, @disciplines, @genders, @ages, @enroll_dates, @finish_dates)", [userIds]
        )
        .then((user) => {
            console.log('user is', user[0][0][0]);
            return res.json(user[0][0][0]);
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "server error", msg: error });
        });
};

// new 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