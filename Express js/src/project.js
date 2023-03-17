const express = require('express')
const app = express();
const path = require('path')
const port = 8000;

const staticPath = path.join(__dirname , '../view')

//To set the view engine
app.set("view engine" , "hbs");

app.use(express.static(staticPath));

//Template engine route
app.get('/' , (req , res)=>{
    res.render('index' , {
        channelName : "Nishant",
    });
})

// app.get('/' , (req , res)=>{
//     res.send("Hello from the express server")
// })

app.listen(port , ()=>{
    console.log(`listening to port ${port}`);
})  