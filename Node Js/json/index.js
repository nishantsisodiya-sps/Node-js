const fs = require("fs")


// creating Object

const info = {
    name : "nishant",
    age : 22,
    language : "Node js"
}

const jsonData = JSON.stringify(info)
// console.log(jsonData);                        //converting object to json formate

// const objectData = JSON.parse(jsonData)
// console.log(objectData);                      // Converting json to object formate

//creating a new file naming json1.json

fs.writeFile('json1.json' , jsonData , (err)=>{
    console.log("Done");
})

// now we are reading the file which we have created earlier

fs.readFile('json1.json' , 'utf-8' , (err , data)=>{
    console.log(data);   
})
