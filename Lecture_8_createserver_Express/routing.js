import express from 'express'
const app = express();
// crete a route
app.get('/',(req , res )=>{
    res.send("u r requested for home route ")
})
// more route
app.get('/sameer', (req , res )=>{
    res.send("here r some info about sameer ")
})
const port = 3000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
