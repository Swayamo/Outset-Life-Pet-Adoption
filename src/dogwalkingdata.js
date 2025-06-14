const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Outset_Life_Pet_Adoption')
.then(()=>{
    // console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const walkingSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    DogWalk:{
        type:String,
    },
    Duration:{
        type:String,
        required:true
    },
    Times:{
        type:String,
        required:true
    }
})

const Collection4=new mongoose.model('dogwalkingdata',walkingSchema);

module.exports=Collection4;