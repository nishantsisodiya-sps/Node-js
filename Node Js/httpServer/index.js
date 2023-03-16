// const http = require('http')

// const server = http.createServer((req , res)=>{
//     res.end("Hello from the other side")
// });

// server.listen(8000, "127.0.0.1");




const http = require('http')

const server = http.createServer((req , res)=>{
    if(req.url == "/"){
        res.end("Hello from the Home side")
    }else if(req.url == "/about"){
        res.end("Hello from the About us side")
    }else{
        res.writeHead(404 , {"Content-type" : "text/html"})
        res.end("<h1> 404 Error , Page does not exist </h1>")
    }
});

server.listen(8000, "127.0.0.1");