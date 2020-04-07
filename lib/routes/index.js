var express = require("express");

const requestHandler = require('../helpers/RequestHandler')
const router = express.Router();
router.use("*",(req,res,next)=>{
    //TODO: CREATE TOKEN GUARD HERE
    next()
})
router.get("/:entity/:id",requestHandler);
router.get("*",(req,res)=>{
    return res.status(404).send({message:"Route not found!"})
})

module.exports = router;