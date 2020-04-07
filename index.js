const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const apiRouter = require('./lib/routes/')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use("/api/", apiRouter);

app.use("*",(req,res)=>{
    return res.status(404).send({message:"Route not found!"})
})

app.listen(8080,()=>{
    console.log("SERVER STARTED ON 8080")
})