const fs = require("fs");

// fs.mkdirSync("crud");                           //To create a folder naming crud

// fs.writeFileSync('bio.txt' , 'Hello everyone my name is Nishant sisodiya');

// fs.appendFileSync('bio.txt' , '  I am Working as Associate Software Engineer')

// const data = fs.readFileSync('bio.txt');
// console.log(data);                       //This will print the data with buffer


// const encodedData =  fs.readFileSync('bio.txt' , "utf8");          //using utf-8 for encoding the data
// console.log(encodedData);


// fs.renameSync('bio.txt' , 'MyBio.txt')

// fs.renameSync("my name is" , "myself")

// Delete 

// fs.unlinkSync('MyBio.txt')  // to delete perticular file

fs.rmdirSync("crud");           //To delete the perticular folder
