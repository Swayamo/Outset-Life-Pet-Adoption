const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb://localhost:27017/Outset_Life_Pet_Adoption")
.then(()=>{
    console.log("Database connected!");
})
.catch(()=>{
    console.log("Database not connected!");
})

const Schema = new mongoose.Schema({
    issue:{
        type:String,
        required:true
    },
    Your_Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Details:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact_Number:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
})

const Collection=new mongoose.model('Report_data',Schema);

module.exports=Collection;