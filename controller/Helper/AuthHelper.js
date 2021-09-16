const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const auth = require("../Helper/AuthHelper");
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp')

exports.login = (req, res, sql) => {
    const { queryBody, query } = sql
    const { Email, password } = queryBody

    db.execute(query, [Email])
        .then(([user, rowdata]) => {
            console.log("user is ", query);
            if (user.length !== 0) {
                bcrypt
                    .compare(password, user[0].Password || user[0].password)
                    .then((isEqual) => {
                        if (!isEqual) {
                            return res
                                .status(401)
                                .json({
                                    message: "email or password is incorrect",
                                });
                        }
                        console.log('let\'s see what we have in user ', user)
                        const userId = user[0].Email;
                        const { role, reg_num } = user[0];
                        const token = jwt.sign({ userId, role, reg_num },
                            `${process.env.SECRET}`, {
                                expiresIn: "1h",
                            }
                        );
                        return res.status(200).json({ token, userId, role });
                    });
            } else {
                return res.status(404).json({ message: "email or password incorrect" });
            }
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "bad request" });
        });
};

exports.signUp = async(req, res, sql) => {
    const { checkUser, registerUser, quer, querBody } = sql;
    let { password, reg_num } = querBody
    console.log(querBody)
    try {
        let conn = await db.getConnection();
        const [results] = await conn.execute(
            checkUser, [...quer]
        );
        console.log("results :", results);
        if (results.length !== 0) {
            return res.status(400).json({ message: "user exists" });
        }
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        querBody.password = password
        const passBody = Object.values(querBody);
        console.log('passbody ', passBody)
        const [data] = await db.execute(registerUser, [
            ...passBody
        ]);

        const markprofile = await conn.execute('call career.markProfile(? ,?,@success )', [quer[0], reg_num])

        const home = await mkdirp(path.dirname(require.main.filename) + "/" + "public/images/docs/" + reg_num);
        console.log("home is :", home);
        const cv = await mkdirp(path.dirname(require.main.filename) + "/" + "public/images/docs/" + reg_num + '/cv/');
        const cover_letter = await mkdirp(path.dirname(require.main.filename) + "/" + "public/images/docs/" + reg_num + '/cover_letter/');
        const certificates = await mkdirp(
            path.dirname(require.main.filename) +
            "/" +
            "public/images/docs/" +
            reg_num +
            "/certificates/"
        );
        // console.log('home is :', home)
        // console.log('cv is :', home)
        res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "error Singup", error });
    }
}

// console.log(path.dirname(require.main.filename))
// console.log(path.dirname(Object.keys(require.cache)[0]));