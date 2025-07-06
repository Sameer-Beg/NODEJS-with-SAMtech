import express from 'express'
const app = express();
// CREATE --> method is POST
// READ --> method is GET
// UPDATE --> method is PUT
// DELETE -->  method is DELETE 

//read
app.get('/sameerbeg' , (req , res )=>{
    res.send("sameer is good developer")
})
//create
app.post('/tanveer',(req ,res )=>{
    
})
const port = 1000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
