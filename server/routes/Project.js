const express = require('express');

const router = express.Router();

//importing controllers
const {createProject, getImportantIllustrations, getImportant3dRenders} = require('../controllers/Project');

router.post('/createProject', createProject);
router.get('/getIllustrations', getImportantIllustrations);

module.exports = router;