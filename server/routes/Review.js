const express = require('express');

const router = express.Router();


//Import the controllers
const {writeReview, getReviews,getPendingReviews} = require('../controllers/Review');
const {authUser} = require('../middleware/authUserMiddleware')
//routes
router.post('/addReview', writeReview);
router.get('/getReviews', getReviews);
router.get('/getPendingReviews', authUser, getPendingReviews)

module.exports = router;