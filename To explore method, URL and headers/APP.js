const http=require('http');

const server=http.createServer((req,res)=>{

console.log("Method:",req.method);
console.log("URL:",req.url);
console.log("Headers:",req.headers);

if(req.method==="GET"){
res.end("GET Request received");
}

else if(req.method==="POST"){
res.end("POST Request received");
}

});

server.listen(3000);