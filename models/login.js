const mongoose = require('mongoose');
const loginschema = new mongoose.Schema({
    email :{type:String,required:true,unique:true},
    password:{type:String,required:true},
    })
const Login = mongoose.model('login', loginschema);
module.exports = Login;