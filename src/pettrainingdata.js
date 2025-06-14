const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Outset_Life_Pet_Adoption')
.then(()=>{
    // console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const trainingSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    DogTrainingCourse:{
        type:String,
    }
})

const Collection2=new mongoose.model('trainingdata',trainingSchema);

module.exports=Collection2;