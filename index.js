//to make http server
/*const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New req recieved\n`;//use req.methods for http methods
    const myUrl = url.parse(req.url,true);
    //console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){//multi route can be implemnetd using switch cases 
            case "/":
                if(req.method==="GET") res.end("homepage");
                //res.end("homepage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`hi,${username}`);
                break;
            case "/search":
                const search = myUrl.query.searh_query;
                res.end("here are the results" +search);
            case "/signup":
                if(req.method === "GET") res.end("its a signup form ");
                else if(req.method==="POST"){
                    res.end("success");
                }
                default:
                res.end("404 not found");    
        }
    });
});
//always try to use non-blocking requests
myServer.listen(8000,() => console.log("server started"));*/


//to make http server using EXPRESS
const express = require("express");

const app = express();
app.get('/',(req,res) =>{// get request
    return res.send("hey from homepage")
});
-
app.get("/about",(req,res)=>{
    return res.send("hey from about" + " hey " + req.query.name + " u are " + req.query.age)
})

app.listen(8000,()=>console.log("server started"));
//always try to use non-blocking requests
