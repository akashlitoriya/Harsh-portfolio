const express = require('express');
const router = express.Router();

const {getBackground, addBackground, changeBackground} = require('../controllers/Background')
const uploadFile = require('../middleware/uploadFileMiddleware')

router.post('/addbackground', uploadFile.single('file'), addBackground);
router.get('/background', getBackground);
router.put('/changebackground', uploadFile.single('file'), changeBackground);

module.exports = router