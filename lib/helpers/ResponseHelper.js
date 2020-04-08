
const HttpStatus = require('http-status-codes')

const ResponseHelper = {
    ok : (res,message,data = null) => {
        const dataObj = data?{data:data}:{}        
        return res.status(HttpStatus.OK).send({ message, ...dataObj})
    },
    created: (res,message,data = null) => {
        const dataObj = data?{data:data}:{}        
        return res.status(HttpStatus.CREATED).send({ message, ...dataObj})
    },
    conflict: (res,message,errors = null)=> {
        const errorObj = errors?{errors:errors}:{}        
        return res.status(HttpStatus.CONFLICT).send({ message, ...errorObj})
    }
}

module.exports = ResponseHelper
