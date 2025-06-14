const express = require('express');
const hbs = require('hbs');
const path =require('path');
const Collection3 = require('./vetvisitdata');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tempelatePath = path.join(__dirname, '../templates');

app.set('view engine','hbs');
app.set('views', tempelatePath);
app.use(express.static(tempelatePath));

app.get('/',(req,res)=>{
    res.render('HomeVetVisit');
})

app.post('/HomeVetVisit',async(req,res)=>{
    const d2={
        Vet_Visit:"Booked",
        Name:req.body.name3,
    };
    await Collection3.insertMany([d2]);
    res.render("HomeVetVisit")
})

app.listen(8081, () => {
    console.log('port connected');
})