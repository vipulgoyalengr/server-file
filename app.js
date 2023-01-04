const express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.get('*',(req,res)=>{
    console.log("In get")
});

port=process.env.PORT || 2001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
