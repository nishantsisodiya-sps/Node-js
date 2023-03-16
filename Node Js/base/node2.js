// const fs = require("fs");
// let text = fs.readFileSync("dell.txt" , "utf-8");
// text = text.replace("are" , "is")
// console.log("The content of the file is");
// console.log(text);

// console.log("creating a new file");
// fs.writeFileSync("new.txt", text)



const fs = require("fs");
 // fs.writeFileSync('new.txt' , 'welcome buddy')
 // fs.appendFileSync('new.txt' , " Hello how are you");                //to add the new data without deleting existing data

// const buf_data = fs.readFileSync('new.txt');
// console.log(buf_data);                                 //It will print the data in buffer data type

// org_data = buf_data.toString();
// console.log(org_data);

// Rename the File

fs.renameSync('new.txt' , 'read.txt')

