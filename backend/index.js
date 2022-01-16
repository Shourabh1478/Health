const express = require('express');
const parser = require('body-parser');
const connectDB = require('./config/db');

connectDB();

const app = express();
app.use(parser.urlencoded({extended : true}));


app.listen(8000, ()=> {
    console.log("Server is listening on http://localhost:8000");
})