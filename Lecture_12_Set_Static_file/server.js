import express from "express";
import path from 'path'

const app = express();

// Create Milldelware . middleware is used to connect to things.
app.use(express.static(path.join(path.resolve(),'public')))  // yaha hum apni public folder ki style.css file ko cnnect kr rhe h 

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

const port = 2000
app.listen(port,()=>console.log(`server is runing on port ${port}`))
