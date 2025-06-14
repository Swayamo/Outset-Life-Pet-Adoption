const express = require('express');
const hbs = require('hbs');
const path =require('path');
const Collection4 = require('./dogwalkingdata');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))   ;

const tempelatePath = path.join(__dirname, '../templates');
// const publicPath = path.join(__dirname, '../WEBD PROJECT');
app.set('view engine','hbs');
app.set('views', tempelatePath);
app.use(express.static(tempelatePath));

app.get('/',(req,res)=>{
    res.render('dogwalking');
})

app.post('/dogwalking',async(req,res)=>{
    const d1={
        DogWalk:"Booked",
        Name:req.body.Name5,
        Times:req.body.Times,
        Duration:req.body.Duration,
    };
    await Collection4.insertMany([d1]);
})

app.listen(7071, () => {
    console.log('port connected');
})