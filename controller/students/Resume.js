/*
    @ RULE: THIS FILE CONSISTS OF CRUD FUNCTIONALITIES OF THE RESUME
*/

const db = require('../../config/db')
const SchoolHelper = require('../Helper/SchoolHelper')

// @RULE : ADD EDUCATION

exports.addEducation = (req, res) => {
    let { userId } = req
    let queryB = { userId, ...req.body }
    let queryBody = Object.values(queryB)
    let sql = {
        query: 'call career.resumeEducation(?,?,?,?,?,?,?);',
        queryParams: [...queryBody],
        message: { message: 'education addedd sucessfully' },
    }

    return SchoolHelper.resumePost(req, res, sql)
}

// @RULE : ADD EDUCATION

exports.addExperience = (req, res) => {
    let { userId } = req
    let queryB = { userId, ...req.body }
    let queryBody = Object.values(queryB)
    let sql = {
        query: 'call career.resumeExperience(?,?,?,?,?,?);',
        queryParams: [...queryBody],
        message: { message: 'experience addedd sucessfully' },
    }

    return SchoolHelper.resumePost(req, res, sql)
}

// @RULE: EDIT RESUME

exports.editResume = async(req, res) => {
    console.log('req edit body is ', req.body)
    let { userId } = req
    let queryB = { userId, ...req.body }
    let queryBody = Object.values(queryB)
    let sql = {
        query: 'call career.editResume(?,?,?,?,?,?,?,?,?);',
        queryParams: [...queryBody],
        message: { message: 'education edited sucessfully' },
    }

    return SchoolHelper.resumePost(req, res, sql)
}

// @RULE: FETCH RESUME

exports.fetchResume = async(req, res) => {
    let { userId } = req
    let returnObject = {}
    let Education, Experience, skills

    const query1 = db.execute(
        'select experience_id,company_name,company_role,year_of_start, year_of_completion,description from resume_experience where user_id = ?', [userId]
    )
    const query2 = db.execute(
        'select school_id,school_name, course, year_of_enroll, year_of_completion, certificate,description from resume_education where students_id = ?', [userId]
    )
    const query3 = db.execute('select skills from skills where  student_ID = ?', [
        userId,
    ])

    try {
        const response = await Promise.all([query1, query2, query3])
        Experience = response[0][0].length !== 0 ? response[0][0] : []
        Education = response[1][0].length !== 0 ? response[1][0] : []
        skills = response[2][0].length !== 0 ? response[2][0] : []

        returnObject = { Education, Experience, skills }
        res.status(200).json(returnObject)
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'error fetching resume' })
    }
}