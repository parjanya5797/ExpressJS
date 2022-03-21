const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.listen(5000,()=>{
    console.log('Server is Listening on port 5000')
})
app.get('/test',()=>{
    console.log("ere");
})


app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})