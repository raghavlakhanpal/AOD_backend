//importig packages
const express=require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//importig files
const User = require("../models/User");
const Key = require("../../config/keys");

//settig up router iterface
const router=express.Router();

///////////settig up routes of requests?/////////

//route -> GET/api/users/test
//description -> connection check
//secuity ->public

router.get("/test",(req,res)=>{
    res.json({message:"route works!!"})
})

//route -> post/api/users/register
//description -> getting register request
//secuity ->private

router.post("/register",(req,res)=>{
const{errors,isValid}=validateRegisterInput(req.body);

if (!isValid) 
    return res.status(400).json(errors);

User.findOne({email:req.body.email}).then(user =>{
if(user){
    errors.email="Email already exists";
    res.status(400).json(errors);
}
else{
//creates the avatar from gravatar
    const avatar = gravatar.url(req.body.email,{
    s:"200", // size of the avatar
    r:"pg", // rating
    d:"mm" // default icon
    });

//creating a new user
const newUser = new User({
name:req.body.name,
email:req.body.email,
password:req.body.password,
username:req.body.username,
skills:req.body.skills,
currentstatus:req.body.currentstatus,
city:req.body.city,
state:req.body.state,
avatar
});

//encrypting the passwod
bcrypt.genSalt(20,(err, salt)=>{
    if(err) throw err; 
    bcrypt.hash(newUser.password,salt,(err,hash)=>{
    if(err) throw err;
    newUser.password=hash;
    newUser.save()
    .then(user=>res.json(user))
    .catch(err=>console.log(err));
});
});
}
});
});
   
//making the router accessible to other files
module.exports=router;