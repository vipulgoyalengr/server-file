const express=require('express');
var bodyParser=require('body-parser');
const cron = require("node-cron");

var app=express();
cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
});
app.get('*',(req,res)=>{
    console.log("In get")
});

port=process.env.PORT || 2001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
