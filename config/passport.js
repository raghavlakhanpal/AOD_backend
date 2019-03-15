//importing packages
const mongoose=require("mongoose");
const express=require("express");
const JwtStrategy=require("passport-jwt").Strategy;
const ExtractJwt=require("passport-jwt").ExtractJwt;


//importing files
const User=mongoose.model("users");
const Key=require("./../config/keys");

//var to store token and secretOrKey
const opts={};

opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=Key.secretOrKey;

//making passport public

module.exports=passport=>{
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        User.findById(jwt_payload.id)
            .then(user=>{
                if(user){
                return done(null,user);
            }
                return done(null,false);
            })
            .catch(err=>console.log(err));
    }));
};
