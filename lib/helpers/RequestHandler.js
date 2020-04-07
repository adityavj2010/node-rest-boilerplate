
const requestHandler = (req,res,next) => {
    console.log("INSIDE REQUEST HANDLER")
    next()
}

module.exports = requestHandler;