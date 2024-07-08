const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hlo World')
})

app.get('/instagram',(req,res)=>{
    res.send('instagram.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})