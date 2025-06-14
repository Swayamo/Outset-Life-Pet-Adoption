const express = require('express');
const hbs = require('hbs');
const path =require('path');
const Collection2 = require('./pettrainingdata');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))   ;

const tempelatePath = path.join(__dirname, '../templates');
const publicPath = path.join(__dirname, '../WEBD PROJECT');
app.set('view engine','hbs');
app.set('views', tempelatePath);
app.use(express.static(tempelatePath));

app.get('/',(req,res)=>{
    res.render('pettraining');
})

app.post('/pettraining',async(req,res)=>{
    const d1={
        DogTrainingCourse:"Booked",
        Name:req.body.name2,
    };
    await Collection2.insertMany([d1]);
})

app.listen(7001, () => {
    // console.log('port connected');
})