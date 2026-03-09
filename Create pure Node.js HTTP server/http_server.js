const http=require('http');

const server=http.createServer((res,req)=>{
    res.writeHead(200,{"Content-Type":"text/plane"});
    res.end();
})
server.listen(8080);
