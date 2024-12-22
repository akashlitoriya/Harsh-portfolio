const express = require('express');

const router = express.Router();
const {loginUser, registerUser} = require('../controllers/User');
const { authUser } = require('../middleware/authUserMiddleware');

//router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/authCheck', authUser, (req, res) => {
    res.status(200).json({
        message: "Valid Token",
    })
})

module.exports = router;