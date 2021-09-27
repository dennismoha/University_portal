/*
    THIS CONSISTS OF VIEWING, FETCHING , EDITING AND DELETING OF THE STUDENT RECORDS BY THE STUDENT
*/


const db = require("../../config/db");
const fs = require('fs/promises')
const path = require('path');
const sgMail = require("@sendgrid/mail");
const crypto = require("crypto");
const bcrypt = require('bcrypt')


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

// @RULE: CREATE STUDENT RESUME.

exports.createResume = (req, res) => {
    console.log("reached the resume creation section", JSON.stringify(req.body));
    const userId = req.userId;
    let { resumeData, resumeDatatType } = req.body;

    db.execute(" call career.createResume(?, ?, ?)", [
            resumeData,
            userId,
            resumeDatatType,
        ])
        .then((user) => {
            console.log("user::::", user);
            return res.json({ message: "success" });
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "server error", msg: error });
        });
}

// @RULE: FETCH RESUME

exports.fetchResume = async(req, res, next) => {
    const userId = req.userId.trim();
    console.log('userid ', userId)

    try {
        let conn = await db.getConnection();
        const [data] = await conn.execute("call career.fetchResume(?, @Educations, @Experiences, @achievements, @skillss, @summaries)", [userId]);
        console.log("results:::", data[0][0], "---results::")
        return res.status(200).json(data[0][0]);
    } catch (error) {
        res
            .status(500)
            .json({ error: "Error fetching resumes error", msg: error });
    }
}


// @RULE: STORE TOKEN AND SEND VERIFICATION MAIL

exports.sendEmailVerification = async(req, res) => {
    let token, tokenExpiration;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    console.log('reached here', req.body)

    crypto.randomBytes(32, (err, buffer) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .json({ message: "error! Try again or contact support" });
            }
            token = buffer.toString('hex')
            tokenExpiration = Date.now() + 3600000
        })
        // @RULE: send token and token expiration to the db this is the db
    try {
        let conn = await db.getConnection();
        await conn.execute("call career.verifyEmailExists(?)", [req.body.userEmail]);
        await conn.execute("call career.resetToken(?, ?, ?)", [req.body.userEmail, token, tokenExpiration]);

        const msg = {
            to: req.body.userEmail, // Change to your recipient
            from: process.env.SENDGRID_FROM, // Change to your verified sender
            subject: "password Reset",
            text: "If this email was not sent by you please contact us",
            html: `<div><p>Click on the link below to change your password... <a href="http:localhost:8000/api/student/passwordreset/${token}"" target="new"></p>
                        <a href="http://localhost:3000/resetpassword/${token}">reset password</a>
                    </div>
            `,
        };
        const result = await sgMail.send(msg)
        console.log('results are ', result)
        return res.status(200).json({ message: "Check your email or spam. if no message try again or verify you entered correct email" });

    } catch (err) {
        console.log('error is ', err)
        if (err && err.message === "That email does not exist") {
            return res.status(400).json({ message: err.message });
        }

        return res
            .status(500)
            .json({ message: "error!  Try Again or contact support" });

    }
}


//  @RULE: RESET PASSWORD

exports.ResetPassword = async(req, res) => {
    const confirmToken = Date.now();
    try {
        let conn = await db.getConnection();
        const [results] = await conn.execute("call career.confirmToken(?, ?, @user)", [
            req.params.token,
            confirmToken,
        ]);
        return res
            .status(200)
            .json({ message: "success", user: results[0][0].user, token: req.params.token });
    } catch (err) {
        console.log("error is ", err);
        if (err && err.message === "Not allowed. Please contact support") {
            return res.status(400).json({ message: err.message });
        }
        if (err && err.message === "token arleady expired or used") {
            return res.status(400).json({ message: err.message });
        }

        return res
            .status(500)
            .json({ message: "error!  Try Again or contact support" });
    }
}

//  @RULE: UPDATE PASSWORD

exports.updatePassword = async(req, res) => {
    const confirmToken = Date.now();
    delete req.body.confirm_password;
    let { email, token, password } = req.body;
    let newpassword, userId;
    userId = email

    try {
        let conn = await db.getConnection();
        const salt = await bcrypt.genSalt(10);
        newpassword = await bcrypt.hash(req.body.password, salt);
        await conn.execute(
            "call career.updatedPassword(?,?, ?, ?)", [userId, token, confirmToken, newpassword]);
        return res
            .status(200)
            .json({ message: "successfully updated password. go to login to confirm" });
    } catch (err) {
        console.log("error is ", err);
        if (err && err.message === "Not allowed. Please contact support") {
            return res.status(400).json({ message: err.message });
        }
        if (err && err.message === "token arleady expired or used") {
            return res.status(400).json({ message: err.message });
        }

        return res
            .status(500)
            .json({ message: "error!  Try Again or contact support" });
    }

}


// @RULE: test email 

exports.sendMailToAdmin = (req, res) => {
    sgMail.setApiKey(
        process.env.SENDGRID_API_KEY
    );

    let { Email, first_name, last_name, Phone_number, Message } = req.body

    console.log(req.body)
    const msg = {
        to: Email, // Change to your recipient
        from: process.env.SENDGRID_FROM, // Change to your verified sender
        subject: `First Name: ${first_name} - LastName: ${last_name} - PhoneNumber:${Phone_number}  `,
        text: `received message from  ${first_name}`,
        html: `<strong>${Message}</strong>`,
    };
    sgMail
        .send(msg)
        .then(() => {

            console.log("Email sent");
            res.json('email sent')
        })
        .catch((error) => {
            console.error(error);
            res.json(error)
        });
}

// scp career.sql sample @00 .00 .00 .00: /home/me /


//     ssh: connect to host 00.00 .00 .00 port 00: Connection refused
// lost connection