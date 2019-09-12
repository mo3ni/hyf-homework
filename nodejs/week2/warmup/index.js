// define express library
const epxress = require("express");
const app = epxress();

// Define 2 routes
app.get("/numbers/add",function(req,res){
    console.log(req.query);
    // ?first=<number here>&second=<number here></number>
    const {first} = req.query;
    const {second} = req.query;
    const add = Number(first) + Number(second);
    res.send("Sum of first and second number: " +`${add}`);
});
app.get("/numbers/multiply",function(req,res){
    // /<first number here>/<second number here>
    const {first} =req.query;
    const {second}=req.query;
    res.send("Multiplication of two numbers: "+ `${first}` * `${second}`);
});

// Server port conf..
app.listen(3000,function(){
    console.log("server request successful!");
});