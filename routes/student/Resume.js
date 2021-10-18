const express = require('express')
const Student_Resume = require('../../controller/students/Resume')
const Auth = require('../../config/authToken')
const path = require('path')
const router = express.Router()

router.post('/create/education/', Auth, Student_Resume.addEducation) // add education details
router.post('/create/experience', Auth, Student_Resume.addExperience) // add experience details

// @RULE : ADD ALL DETAILS

router.get('/resume/', Auth, Student_Resume.fetchResume) // fetch resume details
router.put('/resume/edit/', Auth, Student_Resume.editResume)

module.exports = router