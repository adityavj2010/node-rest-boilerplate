const express = require('express')
const cors = require('cors')
const allRoutes = require('./lib/routes')
const app = express()
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://aditya_cms:qwertyuiop@cluster0-ytf8w.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on('error', () => {
  console.error(`unable to connect to database: ${mongoUri}`);
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(allRoutes);

app.use("*",(req,res)=>{
    return res.status(404).send({message:"Route not found!"})
})

app.listen(8080,()=>{
    console.log("SERVER STARTED ON 8080")
})