import express from 'express'

const app = express();

//midleware
app.use(express.urlencoded({express:true}))


//route
app.get('/',(req,res)=>{
    res.render('index.ejs')

})
// route for data send
app.post('/submit-form',(req,res)=>{
    res.json({
        messege:"submited-form",
        success:true
    })
})

//port
const port = 1000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
