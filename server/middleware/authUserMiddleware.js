const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authUser = async(req, res, next) =>{
    try{
        const token = req.header("Authorization")?.replace('Bearer ', '') || req.body.Authorization?.replace('Bearer ', '');
        if(!token) return res.status(401).json({msg: "No token, authorization denied"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const userExist = await User.findOne({user_id: decoded.user_id});
        if(!userExist) return res.status(401).json({msg: "User not found"});

        req.user = userExist;
        next();
        
    }catch(err) {
        console.error(err);
        res.status(401).json({msg: "Token is not valid"});
    }
}

module.exports = {authUser};