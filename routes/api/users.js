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

//settig up routes of requests




//making the router accessible to other files
module.exports=router;