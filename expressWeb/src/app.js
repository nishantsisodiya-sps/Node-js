const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

// public static Path
const staticPath = path.join(__dirname , '../public')

app.use(express.static(staticPath))

app.get('/' , (req , res)=>{
    res.send('Welcome to home page')
})


app.get('/about' , (req , res)=>{
    res.send('Welcome to About page')
})

app.get('/weather' , (req , res)=>{
    res.send('Welcome to About page')
})

app.get('*' , (req , res)=>{
    res.send('404 Oops! Page not found')
})

app.listen(port , ()=>{
    console.log(`Listening to port no ${port}`);
})