const express = require("express")
const mongoose =require('mongoose')
const path = require("path")
const app = express()
const LogInCollection = require("./mongodb")


app.use(express.json())
app.use(express.urlencoded({ extended: false }))   

const tempelatePath = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../WEBD PROJECT')
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(tempelatePath))

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/signup', async (req, res) => {
    try {
        const data = {
            name1: req.body.name1,
            password: req.body.password,
            mobile: req.body.mobile,
            email1: req.body.email1,
            Address: req.body.Address   
        };       
        const checking = await LogInCollection.findOne({ mobile: req.body.mobile });
        if (checking) {
            res.send("<script>alert('User details already exist!'); window.location.href = 'http://localhost:8000/signup'; </script>");
        } else {
            await LogInCollection.insertMany([data]);
            res.redirect('http://localhost:8000/');
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ mobile: req.body.mobile });
        if (!check) {
            res.send("<script>alert('Wrong Mobile Number!'); window.location.href = 'http://localhost:8000/'; </script>");
        } else if (check.password != req.body.password) {
            res.send("<script>alert('Wrong Password!'); window.location.href = 'http://localhost:8000/'; </script>");
        } else if (check.email1 != req.body.email1) {
            res.send("<script>alert('Wrong Email Address'); window.location.href = 'http://localhost:8000/'; </script>");
        } else {
            res.status(201).send(`
            <script>
                alert("Successfully loged in!!");
                setTimeout(function() {
                    window.location.href = "home.html"; 
                }, );
            </script>
        `);
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});