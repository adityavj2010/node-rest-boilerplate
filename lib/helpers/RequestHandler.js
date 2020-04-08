
/**
 * @description Handles every authenticated request.
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 * @todo Add generic handler
 */
const RequestHandler = (req,res,next) => {
    console.log("INSIDE REQUEST HANDLER")
    next()
}

module.exports = RequestHandler;