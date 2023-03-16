const fs = require('fs');

// Synchronus way 

// const data = fs.readFileSync('read.txt' , 'utf-8');
// console.log(data);
// console.log("After getting the Data");


// Async Way 

fs.readFile('read.txt' , 'utf-8' , (err , data)=>{
    console.log(data);
})
console.log("After Getting data");