const express=require('express');
var bodyParser=require('body-parser');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue,arrayUnion } = require('firebase-admin/firestore');
var admin = require("firebase-admin");
const cron = require("node-cron");
var app=express();
var serviceAccount = require('./teralink-1ef1d-firebase-adminsdk-lf835-15c6cdb08e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teralink-1ef1d-default-rtdb.firebaseio.com"
})
const db = getFirestore();
app.get('/xyz',async (req,res)=>{
    console.log("In get")
    
    const snapshot2 = await db.collection('users').get();

    snapshot2.forEach(async(doc1) => {
          console.log(doc1.id, '=>', doc1.data());
          const cityRef =await db.collection('analytics').doc(doc1.data().username);
          const res = await cityRef.update({count: 0});
          const res2 = await cityRef.update({data1: FieldValue.arrayUnion(Math.random())})
        });
});

port=process.env.PORT || 2001;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
