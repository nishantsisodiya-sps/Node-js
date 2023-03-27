const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect("mongodb://localhost:27017/myData")
.then(()=>{
    console.log("Connection successfull...");
}).catch((err)=>{
    console.log(err);
})


//Schema
// A mongoose schema defines the structure of the document, default values ,validators etc.


const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,

        // validation 
        unique : true,
        lowercase : true,
        minlength :2,
        maxlength : 10
    },
    type : {
        type : String,
        required : true,
        lowercase : true,
        enum:["frontend" , "backend" , "database"]
    },
   // validation of numbers user defined validation 

   video : {
    type : Number,
    validate(value){
        if(value<0){
            throw new Error("Video count should not be Negative")
        }
    }
},
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }

    },
    live : Boolean,
    date : {
        type : Date,
        default : Date.now
    }
})



// Mondel
// A mongoose model is a wrapper on the Mongoose schema. 
// A mongoose schema defines the structure of the document,
// default values , validators etc. whereas a mongoose model provides an interface to the database for creating , quering , updating and deleting the records, etc.



const Playlist = new mongoose.model("Playlist" , playlistSchema)              //creating collection


//Creating document and inserting

//old way

// const angularPlaylist = new Playlist({
//     name : "Angular Js",
//     type : "FrontEnd",
//     video : 80,
//     live : true,
// })

// angularPlaylist.save()


// new way 

// let createDocument = async ()=>{
//     try{
//         const mongoDB = new Playlist({
//         name : "MongoDB",
//         type : "Database",
//         video : 12,
//         live : true,
//     })
//         const nodePlaylist = new Playlist({
//         name : "Node Js",
//         type : "BackEnd",
//         video : 10,
//         live : true,
//     })
//         const javascriptPlaylist = new Playlist({
//         name : "Javascript",
//         type : "Fullsctack",
//         video : 95,
//         live : true,
//     })
//         const pythonPlaylist = new Playlist({
//         name : "Python",
//         type : "BackEnd",
//         video : 2,
//         live : false,
//     })
//         const expressPlaylist = new Playlist({
//         name : "Express Js",
//         type : "BackEnd",
//         video : 10,
//         live : true,
//     })
    
//         let result  = await Playlist.insertMany([mongoDB,nodePlaylist,javascriptPlaylist,pythonPlaylist,expressPlaylist]);
//     }catch(err){
//         console.log(err);
//     }
// }
// createDocument()


//Reading the database

// const getDocument = async()=>{
//    let result =  await Playlist.find().select({name : 1 , _id:0})         //to display only names
// //    .limit(1).skip(1)         //other methods
//    console.log(result);
// }
// getDocument()




//Using the operators...

// const getDocument = async()=>{
//    let result =  await Playlist.find({video : {$in : 10}})
//    .select({name : 1 , _id:0})         //to display only names
// //    .limit(1).skip(1)         //other methods
//    console.log(result);
// }
// getDocument()


//Using Logical Operators

// const getDocument = async()=>{
//    let result =  await Playlist.find
//    ({$and : [{type : "BackEnd"} ,
//      {live : true}]})
//    .select({name : 1 , _id:0})         //to display only names
//    console.log(result);
// }
// getDocument()





//Updating the document

// const updateDocument = async (_id) =>{
//     try{
//         const result = await Playlist.findByIdAndUpdate({_id},{
//             $set : {
//                 name : "JavaScript"
//             }
//         });

//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }

// };

// updateDocument('641d5d75c29c17d72c8915ef')



// Delete document

// const deleteDocument = async(_id)=>{
//     try {
//         const result = await Playlist.deleteOne({_id});
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


// deleteDocument('641d5d75c29c17d72c8915f0')



// adding validation 

let createDocument = async ()=>{
    try{
        const expressPlaylist = new Playlist({
        name : "Java",
        type : "backend",
        video : 0,
        email : "nishant@ts.com",
        live : false,
    })
    
        let result  = await Playlist.insertMany([expressPlaylist]);
    }catch(err){
        console.log(err);
    }
}
createDocument()