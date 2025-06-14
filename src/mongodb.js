const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Outset_Life_Pet_Adoption")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})


const logInSchema=new mongoose.Schema({
    name1:{
        type:String,
        required:true
    },
    email1:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('users',logInSchema);

module.exports=LogInCollection;