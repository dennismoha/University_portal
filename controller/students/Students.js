/*
    THIS CONSISTS OF VIEWING, FETCHING , EDITING AND DELETING OF THE STUDENT RECORDS BY THE STUDENT
*/


const db = require("../../config/db");
const fs = require('fs/promises')
const path = require('path');


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
                    req.files.cv[0].filename.length
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
        console.log('the filename is ', [...filename])
        const addLinks = await conn.execute("call career.addDocsLinks(?,?,?,?)", [req.userId, ...filename]);
        res.status(200).json({ message: "success" });

    } catch (error) {
        console.log(error)
        if (error || errors.length !== 0) {
            res.status(400).json({ message: "error", error: "error" })
        }

    }

}

// @ Rule : CHECK IF FILE EXISTS

async function exists(path) {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}


// @RULE: FETCH PDF
exports.checkFileExists = async(req, res, next) => {
    const folders = ["cover_letter", "cv", "certificates"];
    let initialPath = path.dirname(require.main.filename);
    let paths = [];

    try {
        for (let i = 0; i <= folders.length; i++) {
            let pat =
                initialPath +
                "/" +
                "public/images/docs/" +
                `${req.reg_num}/` +
                folders[i] +
                `/`;
            let results = await exists(pat);
            if (results) {
                paths.push(folders[i] + "# " + pat);
            }

        }
        return res.status(200).json(paths);
    } catch (error) {
        console.log('error')
        return res.status(400).json({ message: "error fetching paths" })
    }

}



// scp career.sql sample @00 .00 .00 .00: /home/me /


//     ssh: connect to host 00.00 .00 .00 port 00: Connection refused
// lost connection