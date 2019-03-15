//importig packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

//importing route files
const users=require("./routes/api/users");

//creating interface between routes and users

//express ->iterface
const app=express();

//body parser ->middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//settig up database//

//importig database link file
const database=require("./config/keys").mongoURI;

//establishing connection
mongoose.connect(database)
        .then(()=>console.log("connection with database is established."))
        .catch(err=>console.log(err));

//setting up passport.js interface
app.use(passport.initialize());
//linkig the cofiguration file
require("./config/passport")(passport);

//route iterface initiated
app.use("/api/users",users);

//port configuration
const port=process.env.PORT || 5000;

//establishig connection
app.listen(port,()=>console.log(`server is now running on port ${port}.`));