
const HttpStatus = require('http-status-codes')
/**
 *  @description Handles all the response of the application
 */
const ResponseHelper = {
    /**
     *  @param {object} res - The Response Object
     *  @param {string} message - The Text Response field
     *  @param {obj} [data = null] - Data to be returned
     *  @returns Response object with status OK along with message and data body if any
     */
    ok : (res,message,data = null) => {
        const dataObj = data?{data:data}:{}        
        return res.status(HttpStatus.OK).send({ message, ...dataObj})
    },
    /**
     *  @param {object} res - The Response Object
     *  @param {string} message - The Text Response field
     *  @param {obj} [data = null] - Data to be returned
     *  @returns Response object with status CREATE along with message and data body if any
     */
    created: (res,message,data = null) => {
        const dataObj = data?{data:data}:{}        
        return res.status(HttpStatus.CREATED).send({ message, ...dataObj})
    },
    /**
     *  @param {object} res - The Response Object
     *  @param {string} message - The Text Response field
     *  @param {obj} [erros = null] - Errors to be returned
     *  @returns Response object with status CONFLICT along with message and error body if any
     */
    conflict: (res,message,errors = null)=> {
        const errorObj = errors?{errors:errors}:{}        
        return res.status(HttpStatus.CONFLICT).send({ message, ...errorObj})
    }
}

module.exports = ResponseHelper
