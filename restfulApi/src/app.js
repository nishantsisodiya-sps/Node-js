const { response } = require('express');
const express = require('express');
const app = express()
require("./db/conn");

const student = require("./models/students");
const router = require('./routers/student');
const studentRouter = require('./routers/student');
const port = process.env.port || 8800;

app.use(express.json())         //to use json in express which is inbuilt
app.use(studentRouter);         // to use routers




//Connection setup to port =========>

app.listen(port , ()=>{
    console.log(`Listening to Port ${port}`);
})