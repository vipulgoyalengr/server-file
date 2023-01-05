const express=require('express');
var bodyParser=require('body-parser');
const cron = require("node-cron");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
var admin = require("firebase-admin");
var serviceAccount = require('teralink-1ef1d-firebase-adminsdk-lf835-15c6cdb08e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teralink-1ef1d-default-rtdb.firebaseio.com"
})
const db = getFirestore();
var app=express();
cron.schedule("*/10 * * * * *", function() {
    console.log("running a task every 10 second");
    const snapshot =  db.collection('users').get();
    snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });

});
app.get('*',(req,res)=>{
    console.log("In get")
});

port=process.env.PORT || 2001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
