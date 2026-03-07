const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid = require('uuid4')

const registerUser = async(req, res, next) =>{
    try{
        const {name, email, password} = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: passwordHash,
            user_id: uuid(),
        })
        res.status(200).json({message: 'User created successfully'})
    }
    catch(err){
        next(err);
    }
}

const loginUser = async(req, res, next) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Please enter all fields'})
        }

        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message: 'No account with this email has been registered'})
        }

        const passwordMatch = await bcryptjs.compare(password, userExist.password);
        if(!passwordMatch){
            return res.status(400).json({message: 'Invalid credentials'})
        }
        const user = {}
        user.user_id = userExist.user_id;
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.status(200).json({message: "Login successful", token})
    }catch(err){
        next(err);
    }
}


module.exports = {registerUser, loginUser}