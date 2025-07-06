import express from 'express'
const app = express();

let product = [
    {title : "iphoe" , price : 20000 , brande : "Apple"},
    {title : "galaxy" , price : 300000 , brande : "samsung"}
]
//route
app.get('/',(req , res )=>{
    //.. name declare 
    let name = "sameer beg "
    res.render("index.ejs" , {name , product})
})
const port = 3000
app.listen(port,()=>console.log(`server is runing on port ${port}`))
