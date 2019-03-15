const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const newSchema= new Schema({
    username: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    picture: {type:String}
});
module.exports=User=mongoose.model("users",newSchema);