const mongoose = require('mongoose');
const dataschema = new mongoose.Schema({
    name :{type:String,required:true},
    propertytype :{type:String,required:true},
    negotable:{type:String,required:true},
    price:{type:Number,required:true},
    ownership:{type:String,required:true},
    propertyage:{type:Number,required:true},
    propertyapproved:{type:String,required:true},
    propertydescription:{type:String,required:true},
    bankloan:{type:String,required:true},
    length:{type:Number,required:true},
    breadth:{type:Number,required:true},
    totalarea:{type:Number,required:true},
    areaunit:{type:String,required:true},
    noofbhk:{type:Number,required:true},
    nooffloors:{type:Number,required:true},
    attached:{type:String,required:true},
    westerntoilet:{type:String,required:true},
    furnished:{type:String,required:true},
    carparking:{type:String,required:true},
    lift:{type:String,required:true},
    electricity:{type:String,required:true},
    facing:{type:String,required:true},
    namei:{type:String,required:true},
    mobile:{type:Number,required:true},
    postedby:{type:String,required:true},
    saletype:{type:String,required:true},
    featuredpackage:{type:String,required:true},
    ppdpackage:{type:String,required:true},
    image:{type:String,required:true},
    email:{type:String,required:true},
    city :{type:String,required:true},
    area:{type:String,required:true},
    pincode:{type:Number,required:true},
    address:{type:String,required:true},
    landmark:{type:String,required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    PPDID:{type:String,required:true},
    views:{type:Number,required:true},
    days:{type:Number,required:true}
  })
const data = mongoose.model('data', dataschema);
module.exports = data;



