const express = require('express');

const router = express.Router();


//Import the controllers
const {writeReview, getReviews,getPendingReviews, reviews, approveReview, deleteReview, editReview} = require('../controllers/Review');
const {authUser} = require('../middleware/authUserMiddleware')
//routes
router.post('/addReview', writeReview);
router.get('/getReviews', getReviews);
router.get('/getPendingReviews', authUser, getPendingReviews)
router.get('/reviews', reviews);
router.put('/approve/:id', authUser, approveReview)
router.delete('/deleteReview/:id', authUser, deleteReview);
router.put('/editReview/:id', authUser, editReview);

module.exports = router;