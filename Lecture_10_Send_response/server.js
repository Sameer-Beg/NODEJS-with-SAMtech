import express from 'express'
import path, { join } from 'path'

const app = express();

// create an arr in  this arr create abject
const products = [{
    title : "iphone" , price : 12000 , brande : "Aplle",
    title : "galaxy" , price : 13000 , brande : "samsung",
    title : "redme" , price : 14000 , brande : "readme"
}]
// send response in json
app.get('/',(req , res )=>{
    res.json({
        messege : "fetach all products ",
        products : products,
        success : true
    })
})

// send response in html
app.get('/html', (req , res )=>{
    res.send("<h1>sameer is very good developer </h1>")
})

// send response in html file
const dir = path.resolve();
console.log("my apth = " , dir)
const url = path.join(dir , 'index.html')
console.log("fullpath" , url)
app.get('/htmlfile',(req,res )=>{
    res.sendFile(url)
})
//
const port = 1000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
