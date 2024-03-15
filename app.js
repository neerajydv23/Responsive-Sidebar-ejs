require('dotenv').config({path:"./.env"})
const express = require('express');
const path = require('path');
const app = express()
var logger = require('morgan');
// require('./models/dbconfig.js').connectDB();
const adminRouter = require('./routes/adminRouter.js');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


//logger
app.use(logger('dev'));
// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/admin',adminRouter);


app.listen(process.env.PORT,()=>{
    console.log( `Server running on PORT ${process.env.PORT}`);
})