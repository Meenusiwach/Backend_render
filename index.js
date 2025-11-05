const express = require('express')
require('dotenv').config()
const app = express()
app.get('/',(req,res)=>{
    res.send("hello Meenu siwach")
})
app.get('/twitter',(req,res)=>{
    res.send("<h1>this is twitter route and these are the changes made to this <h1>")
})
app.get('/login',(req,res)=>{
    
    res.send("this is login page that can use the id ")
})
app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})
