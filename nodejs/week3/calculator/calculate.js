// const express = require("express");
// const router = express.router();
const express =require("express");
const router = require("express").Router();
const calc = express();

    // User = require('./node_modules/'),
    // config = require('../../config');
// const http = require("./node_modules/router");
// const router = express.router();
// express.router();
// const router = router();
router.post('/',function(request,response,next){
    let a= request.body.a;
    let b= request.body.b;
    let c = a+b;
    switch(requestAnimationFrame.params.operation){
        case 'add':
            let res= a+b;
            response.send(res);
            break;
        case 'sub':
            let res= a-b;
            response.send(res);
            break;
        case 'multiply':

            let res= a*b;
            response.send(res);
        case 'devide':
            let res= a/b;
            response.send(res);
            break;
        default:
            response.send("default");
    }
    // next();
});
module.exports = router;