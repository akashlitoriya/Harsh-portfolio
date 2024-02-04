const express = require('express');

const router = express.Router();


//Import the controllers
const {writeReview, getReviews} = require('../controllers/Review');

//routes
router.post('/writeReview', writeReview);
router.get('/getReviews', getReviews);

module.exports = router;