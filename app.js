const express = require('express')
const app = express()
const path = require('path');
const {products} = require('./data')

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1> <a href="/api/products">Products</a>')
})

app.listen(5000,()=>{
    console.log("Server is Listening")
})