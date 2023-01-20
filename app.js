const express = require('express');
const { DBConnection } = require('./database/config');
const app = express();
require('dotenv').config()

// Start Server
const port = process.env.PORT;

// Connect to Database
DBConnection()

// Body Parser
// parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false })) 
// parse application/json 
app.use(express.json())

// Configure template engines
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views')

// Specific static files
app.use(express.static(__dirname+'/public'));
app.use('/assets/img', express.static('img'));

// Routes
app.use('/admin/books',require('./routers/adminRouter'));
app.use('/',require('./routers/frontRouter'));

// app.get('/', (req,res)=>{
//     res.send(`<h1>Hola</h1>`)
// })

// app.get('/',(req,res)=>{
//     res.render('back/index')
// })

// app.get('/admin/books',(req,res)=>{
//     res.render('back/books')
// })

app.use((req,res)=>{
    res.status(404).render('front/404',{
        error:'404',
        msg:'pagina no encontrada'
    })
})



// Port
app.listen(port, ()=>{
    console.log(`Running server on port ${port}`);
})