const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const config = require('../config/database');

//remove the comment to register a new admin through localhost:xxx/users/register
//also remove the comment in models/user.js -> addUser func
/*router.post('/register', (req,res,next)=>{
    let newUser = new User({
        username:req.body.username,
        password:req.body.password
    });
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success: false, msg:'failed'});
        }
        else{
            res.json({success: true, msg:'User registered'})
        }
    })
})
*/

//authenticate
router.post('/authenticate',(req, res, next) =>{
    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password,(err, isMatch)=>{
if(err) throw err;
if(isMatch){
    const token = jwt.sign(user.toJSON(), config.secret,{
        expiresIn: 604800
    });
    res.json({
        success: true,
        token: 'Bearer '+token,
        user:{
            id: user._id,
            username:user.username
        }
    });
}
else{
    return res.json({success: false, msg: 'Password is incorrect'}); 
}
        });
    });
});
//add entries
router.get('/entries', passport.authenticate('jwt', {session:false}),(req, res, next) =>{
    res.json({
        user: req.user
    })
});

module.exports=router;