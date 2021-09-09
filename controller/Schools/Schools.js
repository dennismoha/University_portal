/*   
    THIS MODULE CONSISTS OF LOGIC TO ADD COLLEGE, CAMPUS , COURSES.    
*/


const db = require("../../config/db");
const SchoolHelper = require('../Helper/SchoolHelper')

// @RULE: ADD A NEW CAMPUS TO DATABASE;

exports.createCampus = async(req, res) => {
    let { campus_name } = req.body;
    let campusName = campus_name
    try {
        conn = await db.getConnection();
        const [results] = await conn.execute(
            "call career.createCampus( ?,@campusNames)", [campusName]
        );
        res
            .status(200)
            .json({
                message: "campus addedd successfully",
                campus: results[0][0].campusNames,
            });


    } catch (error) {
        console.log(error.sqlMessage);
        res.status(400).json({ message: error.sqlMessage })
    }
}

// @RULE: ADD A NEW COLLEGE TO DATABASE.

exports.addCollege = async(req, res, next) => {
    let { college_name, location, campus } = req.body;
    college_name = college_name + " , " + location;

    try {
        conn = await db.getConnection();
        const [results] = await conn.execute(
            "call career.createCollege( ? ,?,@collegenames)", [college_name, campus]
        );

        res.status(200).json({
            message: "college added successfully",
            campus: results[0][0].collegenames,
        });

    } catch (error) {
        if (error.sqlMessage) {
            return res.status(400).json({ message: error.sqlMessage });
        }
        return res.status(400).json({ error: " bad request" });

    }
}

// @RULE: ADD A NEW COURSE TO DATABASE.

exports.addCourse = async(req, res, next) => {
    let { coursename, collegename } = req.body;
    try {
        conn = await db.getConnection();
        const [results] = await conn.execute(
            "call career.createCourse( ? ,?,@coursenames)", [coursename, collegename]
        );
        res.status(200).json({
            message: "course added successfully",
            campus: results[0][0].campusNames,
        });

    } catch (error) {
        if (error.sqlMessage) {
            return res.status(400).json({ message: error.sqlMessage });
        }
        return res.status(400).json({ error: " bad request" });

    }
}

/*
    =================================== EDIT CAMPUS , COLLEGE, COURSE =============================

*/

// @RULE : EDIT CAMPUS

exports.editCampus = async(req, res, next) => {
    let { campusname } = req.body;
    let id = req.params.campusId;

    let sql = {
        query: "call career.editCampus( ? ,?,@newCampus)",
        queryParams: [campusname, id],
        message: { message: "campus updated sucessfully" },
    }

    return SchoolHelper.Edit(req, res, sql)

}


// @RULE : EDIT COURSE

exports.editCourse = async(req, res, next) => {
    let queryBody = Object.values(req.body)

    let sql = {
        query: "call career.editCourses( ? ,?, ?,@coursenames)",
        queryParams: [...queryBody],
        message: { message: "course updated sucessfully" },
    };

    return SchoolHelper.Edit(req, res, sql)

}

// @RULE : EDIT COLLEGE

exports.editCollege = async(req, res, next) => {
    let { college_name, location } = req.body;
    college_name = college_name + " ," + location;
    req.body.college_name = college_name;
    delete req.body.location

    let queryBody = Object.values(req.body)

    let sql = {
        query: "call career.editCollege( ? ,?, ?,@collegenames)",
        queryParams: [...queryBody],
        message: { message: "college updated sucessfully" },
    };

    return SchoolHelper.Edit(req, res, sql)
}