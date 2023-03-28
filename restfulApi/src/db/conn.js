const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students-api')
.then(()=>{
    console.log("connection successfully setup");
}).catch((err)=>{
    console.log("Failed to connect");
})