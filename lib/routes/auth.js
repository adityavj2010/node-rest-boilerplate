const express = require("express");
const AuthController = require('../controller/AuthController');
const router = express.Router();

const requestHandler = require('../helpers/RequestHandler')

router.post("/login",AuthController.login);
router.post("/register",AuthController.register);

router.use("*",(req,res)=>{
    return res.status(404).send({message:"Route not found!"})
})

module.exports = router;