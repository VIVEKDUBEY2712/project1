const fs= require('fs');

//create a file

fs.writeFile("server.txt","vivek dubey",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file creates successfully");
    
});

// readfile

fs.readFile("server.txt",'Utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);

})

//writting data

fs.appendFile("server.txt","\n vivek dubey",(err,data)=>{
    if (err){
        console.log(err);

    }
    console.log("data")
})

// delete  the file

fs.unlink("server.txt",(err)=>{
    if(err){
        console.log(err);
    }
})