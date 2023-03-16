const path = require('path')
const express = require('express');
const app = express();


const staticPath = path.join(__dirname , "../public") 

//built in middleware
app.use(express.static(staticPath));

app.get("/" , (req , res)=>{
    res.send("Hello from express");
});

app.get("/about" , (req , res)=>{
    res.send("Hello from express about page");
});

app.listen(3000 , ()=>{
    console.log("Listening port 3000");
})