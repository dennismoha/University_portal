/*
    THIS CONSISTS OF VIEWING, FETCHING , EDITING AND DELETING OF THE STUDENT RECORDS BY THE STUDENT
*/


const db = require("../../config/db");


// @RULE : CREATE STUDENT PROFILE

exports.createStudentProfile = (req, res, next) => {
    const userIds = req.userId;
    console.log("userID :", req.userId);
    const body = Object.values(req.body)
    console.log(req.body)

    db.execute(
            "call career.createProfile(?, ?,? ,? ,?,?,?,?,?,?,?)", [...body, userIds]
        )
        .then((user) => {
            console.log("user::::", user)
            return res.json({ message: "success" });
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "server error", msg: error });
        });
};

// UPLOAD STUDENT DOCUMENTS
exports.uploadStudentDocs = async(req, res, next) => {
    let filename = []
    let errors = []
    if (req.error) {
        errors.push('error uploading some files')
    }
    try {
        if (req.files) {
            if (req.files.cv) {
                console.log(
                    "req.file:::::::::::::::::::::",
                    req.files.cv[0].filename
                );
                filename.push(req.files.cv[0].filename);
            }

            if (req.files.cover_letter) {
                console.log(
                    "req.file2:::::::::::::::::::::",
                    req.files.cover_letter[0].filename
                );
                filename.push(req.files.cover_letter[0].filename);
            }
            if (req.files.certificates) {
                filename.push(req.files.certificates[0].filename);
            }
        } else {
            errors.push('error')
            throw new Error(errors)
        }
        let conn = await db.getConnection();
        const addLinks = await conn.execute("call career.addDocsLinks(?,?,?,?)", [req.userId, ...filename]);
        res.status(200).json({ message: "success" });

    } catch (error) {
        console.log(error)
        if (error || errors.length !== 0) {
            res.status(400).json({ message: "error", error: "error" })
        }

    }

}


// scp career.sql sample @00 .00 .00 .00: /home/me /


//     ssh: connect to host 00.00 .00 .00 port 00: Connection refused
// lost connection