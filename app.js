const express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader("Access-Control-Allow-Headers","Origin,X-auth,X-Requested-With,Content-Type,Accept,Authorization");
    next();
});
let path = require('path');

app.use(bodyParser.json({limit: '50mb'}));
app.get('*',(req,res)=>{
    console.log("In get")
});

port=process.env.PORT || 2001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
