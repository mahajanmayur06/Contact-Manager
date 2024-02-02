const expressAsyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = expressAsyncHandler(async (req,res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) res.sendStatus(400).json({message : 'All feilds required'});

    const userAvailable = await User.findOne({ email });
    if (userAvailable) return res.sendStatus(400).json({ message : 'User already registered'});

    const hashedPwd = await bcrypt.hash(password, 10);
    console.log(hashedPwd);

    const user = await User.create({
        username, email, password : hashedPwd
    });
    console.log(`User created ${user}`);
    if (user){
        res.status(201).json( {_id : user.id, email: user.email})
    } else {
        res.status(400);
        throw new Error("user data is not valid")
    }
    res.json({ message : "Register"});
    
})

//@desc Register a user
//@route POST /api/users/login
//@access public
const loginUser = expressAsyncHandler(async (req, res) => {
    const {email, password } = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user =  await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(            
            {
                user : {
                    username : user.username,
                    email : user.email,
                    id : user.id
                },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : '1m'
        });
        res.status(200).json({accessToken});
    }   
    else
        res.status(401).json({message : 'Password or email not valid'});
    res.json({message : 'login user'});
})

//@desc Register a user
//@route GET /api/users/current
//@access private
const currentUser = expressAsyncHandler(async (req, res) => {
    res.json({message : 'Current user info'});
})

module.exports = { registerUser, loginUser, currentUser };