//importing packages

const validator=require("validator");
const isEmpty=require("./isEmpty");

//creating a validation function
//that is publically accessible

module.exports=function validateRegisterInput(data){
const errors={};

data.name=!isEmpty(data.name)?data.name:"";
data.email=!isEmpty(data.email)?data.email:"";
data.password=!isEmpty(data.password)?data.password:"";
data.avatar=!isEmpty(data.avatar)?data.avatar:"";
data.username=!isEmpty(data.username)?data.username:"";
data.skills=!isEmpty(data.skills)?data.skills:"";
data.currentStatus=!isEmpty(data.currentStatus)?data.currentStatus:"";
data.city=!isEmpty(data.city)?data.city:"";
data.state=!isEmpty(data.state)?data.state:"";
data.country=!isEmpty(data.country)?data.country:"";
data.contact=!isEmpty(data.contact)?data.contact:"";



if (!validator.isLength(data.name, { min: 2, max: 25 })) {
    errors.name = "Name must be between 2-25 characters";
}
if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
}
if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
}
if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
}
if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
}
if (!validator.isLength(data.password, { min: 8, max: 20 })) {
    errors.password = "Password must be at least 8 characters";
}
if(validator.isEmpty(data.currentStatus)){
    errors.currentStatus = "Please enter your current status"
}

return {
    errors,
    isValid:isEmpty(errors)
  };
};