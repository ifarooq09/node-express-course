const CustomAPIError = require('../errors/custom-error.js')

const { StatusCodes } = require('http-status-codes')

class BadRequest extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequest
  