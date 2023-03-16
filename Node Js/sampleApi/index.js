const fs = require('fs')
const http = require('http')

const server = http.createServer((req , res)=>{

    const data = fs.readFileSync(`${__dirname}/userApi/user.json` , 'utf-8');
        const objdata = JSON.parse(data);

    if(req.url == "/"){
        res.end("Hello from the Home side")
    }else if(req.url == "/about"){
        res.end("Hello from the About us side")
    }
    else if(req.url == "/api"){
            res.writeHead(200 , {"Content-type" : "application/json"})
            res.end(objdata[1].name);
        }
    else{
        res.writeHead(404 , {"Content-type" : "text/html"})
        res.end("<h1> 404 Error , Page does not exist </h1>")
    }
});

server.listen(8000, "127.0.0.1" , ()=>{
    console.log("listning to port no 8000");
});