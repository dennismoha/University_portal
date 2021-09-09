var express = require("express");
const School = require("../../controller/Schools/Schools");
const router = express.Router();

router.post('/addcampus', School.createCampus);
router.post("/addcollege", School.addCollege);
router.post("/addcourse", School.addCourse);

// @RULE: EDIT SCHOOLS
router.put("/editcampus/:campusId", School.editCampus);
router.put("/editcourse/", School.editCourse);
router.put("/editcollege/", School.editCollege);




module.exports = router;