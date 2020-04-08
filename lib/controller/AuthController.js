const ResponseHelper = require('./../helpers/ResponseHelper')
const User = require('../models/user')

module.exports = {

    login : (req,res) => {
        console.log("LOGIN")
        return ResponseHelper.ok(res,"SUCCESS")        
    },

    register: (req,res) => {
        const user = new User(req.body)
        return user.save().then(savedUser=>{
            return ResponseHelper.created(res,"CREATED")
        }).catch((err)=>{
            console.error("ERROR",err.message)
            return ResponseHelper.conflict(res,"User Already Exists!")
        })
    } 
}
