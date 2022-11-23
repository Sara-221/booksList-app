const express = require('express');
const app = express();
require('dotenv').config()

// Start Server
const port = process.env.PORT;

// Connect to Database


// Configure template engines
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views')

// Specific static files
app.use(express.static(__dirname+'/public'));
app.use('/assets/img', express.static('img'));

// Routes
// app.get('/', (req,res)=>{
//     res.send(`<h1>Hola</h1>`)
// })

app.get('/',(req,res)=>{
    res.render('back/index')
})

// Port
app.listen(port, ()=>{
    console.log(`Running server on port ${port}`);
})