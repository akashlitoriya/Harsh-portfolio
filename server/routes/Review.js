const express = require('express');

const router = express.Router();


//Import the controllers
const {writeReview, getReviews,getPendingReviews} = require('../controllers/Review');

//routes
router.post('/writeReview', writeReview);
router.get('/getReviews', getReviews);
router.get('/getPendingReviews', getPendingReviews)

module.exports = router;