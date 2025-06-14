const express = require("express");
const path =require('path');
const hbs = require("hbs");
const Collection = require("./animaldata");
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const tempelatePath = path.join(__dirname, '../templates');
// const publicPath = path.join(__dirname, '../WEBD PROJECT');
app.set('view engine', 'hbs');
app.set('views', tempelatePath);
app.use(express.static(tempelatePath));

app.get('/',(req,res)=>{
    res.render('animalabuse');
})

app.post('/animalabuse',async(req,res)=>{
    const data1={
        issue:req.body.issue,
        Your_Name:req.body.Your_Name,
        Address:req.body.Address,
        State:req.body.State,
        City:req.body.City,
        Details:req.body.Details,
        Email:req.body.Email,
        Contact_Number:req.body.Contact_Number,
        Date:req.body.Date,
    }

    await Collection.insertMany([data1]);
    res.status(201).send(`
            <script>
                setTimeout(function() {
                    window.location.href = "home.html"; 
                }, );
            </script>
        `);
})
app.listen(9001, () => {
    console.log('port connected');
})
