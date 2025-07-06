import express from 'express'
import mongoose from 'mongoose';

const app =express();

// here we can connect the mongoose 
mongoose.connect("mongodb+srv://sameer423j:TS7j07TUFoyrqFBs@cluster0.4adxqjm.mongodb.net/",{
    dbName:"Nodejs with sam"
}).then(()=>console.log("MongoDn conected")).catch((err)=>console.log(err))

const port = 1000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
