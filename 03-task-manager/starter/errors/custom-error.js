
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (messgae, statusCode) => {
    return new CustomAPIError(messgae, statusCode)
}

module.exports = { createCustomError, CustomAPIError }