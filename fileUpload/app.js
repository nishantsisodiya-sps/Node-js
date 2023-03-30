const express = require ('express');
const multer = require ('multer')
const app = express(); 
const path = require('path');
require ('./db/conn')

const images = require("./model/i")

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null , "./images")
    },
    filename : (req , file , cb)=>{
        cb(null ,Date.now() + '--' + file.originalname)
    }
});

const upload = multer({storage : fileStorageEngine});


//Uploading file form frontend


app.get("/" , (req,res)=>{
    // res.send('welcome')
    res.sendFile(path.join(__dirname, "index.html"))
})


//Upload file from backend

app.post('/single', upload.single('image') , (req , res)=>{
    console.log(req.file);
    res.send('single file upload successfull');
});


app.post('/multiple',upload.array('images' , 3) , (req,res)=>{
    console.log(req.files);
    res.send('Multiple file upload successfull')
})


app.listen(5000 , ()=>{
    console.log('Listening to port 5000');
});