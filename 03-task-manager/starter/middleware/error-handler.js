const {CustomAPIError} = require('../errors/custom-error.js')

const errorHandlerMiddlware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(500).json({ msg: "Something went wrong, try agian later" })
}

module.exports = errorHandlerMiddlware