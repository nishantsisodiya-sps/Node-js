const express = require('express');
const app = express();

// app.get(route , callback)

app.get("/" , (req , res)=>{
    res.send("Hello from express");
});


app.get("/about" , (req , res)=>{
    res.send("Hello from express about page");
});



app.listen(3000 , ()=>{
    console.log("Listening port 3000");
})