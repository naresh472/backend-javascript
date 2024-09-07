const http = require("http")

const fs = require("fs")
const home = fs.readFileSync("../pages/home.html")
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("<h1>this is a Home page load from the node js server code</h1><a href='/about'>about page</a><a href='/contact'>contact page</a>");
    }else if(req.url == "/about"){
        res.end("<h1>this is about us page</h1> <a href='/'>home page</a><a href='/contact'>contact page</a>");
    }else if(req.url == "/contact"){
        res.end("<h1>this is contact us page</h1> <a href='/'>home page</a><a href='/about'>about page</a>")
    }else if(req.url == "/homepage"){
        res.end(home);
    }
    else{
        res.end("Error 404 page not found");
    }
})

server.listen(2000,"localhost",()=>{
    console.log("server is started");
})