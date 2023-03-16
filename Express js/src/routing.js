const express = require('express');
const app = express();
const port = 8000;

app.get('/' , (req , res)=>{
    res.send("Welcome to CODEBRO")
})


app.get('/course' , (req , res)=>{
    res.send("Welcome to CODEBRO Courses page")
})

app.get('/contact' , (req , res)=>{
    res.send("Welcome to CODEBRO Contact us page")
})

app.listen(port , ()=>{
    console.log(`Listening to port ${port}`);
})