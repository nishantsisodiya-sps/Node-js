const express = require('express');
const app = express();
const port = 8000;

app.get('/' , (req , res)=>{
    res.status(200).send("Welcome to CODEBRO")
})

// app.get('/course' , (req , res)=>{
//     res.send([
//         {
//         id : 1,
//         language : "Python" ,
//     },
//         {
//         id : 2,
//         language : "Java" ,
//     },
//         {
//         id : 3,
//         language : "JavaScript" ,
//     },
// ])
// })



app.get('/course' , (req , res)=>{
    res.json([
        {
        id : 1,
        language : "Python" ,
    },
        {
        id : 2,
        language : "Java" ,
    },
        {
        id : 3,
        language : "JavaScript" ,
    },
])
})

app.get('/contact' , (req , res)=>{
    res.send("Welcome to CODEBRO Contact us page")
})

app.listen(port , ()=>{
    console.log(`Listening to port ${port}`);
})