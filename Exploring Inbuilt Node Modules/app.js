// OS Module

const os= require('os')

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());


// pathmodule

const path= require('path');
console.log(path.basename(__filename));
console.log(path.dirname(__filename));

// url module

const url =require('url');

let myurl=new URL("http://mywebsite.com/hello.html?id=100&status=active");
console.log(myurl);
console.log(myurl.hostname);
console.log(myurl.pathname);
console.log(myurl.searchParams.get("id"));