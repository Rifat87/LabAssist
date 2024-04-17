const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const mongoose = require('mongoose');

// Connect to MongoDB database
// mongoose.connect('mongodb://localhost/labassist', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB', err));

//Serve static files from the public directory
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(5000);