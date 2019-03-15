const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const newSchema= new Schema({
    name: {type:String,required:true},

    email: {type:String,required:true},

    password: {type:String,required:true},

    avatar: {type:String},

    username:{type:String,required:true},

    skills:{type:[String],required:true},

    currentstatus:{type:String,max:15,required:true},

    city:{type:String,required:true},

    state:{type:String,required:true},

    githubusername:{type:String}

});
module.exports=User=mongoose.model("users",newSchema);