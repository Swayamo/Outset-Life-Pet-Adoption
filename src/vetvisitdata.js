const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Outset_Life_Pet_Adoption')
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const VET_SCHEMA = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Vet_Visit:{
        type:String,
    }
})

const Collection3=new mongoose.model('Vetvisit',VET_SCHEMA);

module.exports=Collection3;