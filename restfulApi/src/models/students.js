const mongoose = require('mongoose');
const validator = require('validator');

//Creating schema type

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
    },
    email : {
        type : String,
        required : true,
        unique: [true , "Email id already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type : Number,
        minlength : 10,
        maxlength : 10,
        required : true,
        unique : true
    },
    address : {
        required : true,
        type : String
    },
    avtar : {
        type : String
    }
})


// creating a new collection 

const student = new mongoose.model('student' , studentSchema);

module.exports = student;