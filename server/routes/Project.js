const express = require('express');

const router = express.Router();

//importing controllers
const {createProject, getImportantPersonalProject, getImportantProductAnimation,getImportantProductVisualization} = require('../controllers/Project');

router.post('/createProject', createProject);
router.get('/getPersonalProjects', getImportantPersonalProject);
router.get('/getProductAnimations', getImportantProductAnimation);
router.get('/getProductVisualizations', getImportantProductVisualization);

module.exports = router; 