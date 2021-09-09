var express = require("express");
const Students = require("../../controller/students/Students");
const Auth = require('../../config/authToken')
const path = require('path')
const router = express.Router();

const multer = require("multer");
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('file', file)
        if (file.fieldname === 'cv') {
            cb(
                null,
                path.dirname(require.main.filename) +
                "/" +
                "public/images/docs/" +
                `${req.reg_num}/cv/`
            );
        } else if (file.fieldname === "cover_letter") {
            cb(
                null,
                path.dirname(require.main.filename) +
                "/" +
                "public/images/docs/" +
                `${req.reg_num}/cover_letter/`
            );
        } else {
            cb(
                null,
                path.dirname(require.main.filename) +
                "/" +
                "public/images/docs/" +
                `${req.reg_num}/certificates/`
            );
        }

    },
    filename: (req, file, cb) => {
        // console.log(file)
        cb(
            null,
            file.fieldname + '_ ' + new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
        );
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        req.error = "file not accepted";
        cb(null, false);
    }
};


const cpUpload = multer({
    storage: fileStorage,
    fileFilter: fileFilter,
}).fields([
    { name: "cv", maxCount: 1 },
    { name: "cover_letter", maxCount: 1 },
    { name: "certificates", maxCount: 4 },
]);



// @RULE: STUDENT PROFILE
router.post("/createprofile", Auth, Students.createStudentProfile);


// @RULE: POST MEDIA
router.post("/addmedia", Auth, cpUpload, Students.uploadStudentDocs);



module.exports = router;