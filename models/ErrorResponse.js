const http = require('http');
const Response = require('./Response.js');

class ErrorResponse extends Response {

    constructor(errorCode, errorMessage = http.STATUS_CODES[errorCode]) {
        super(errorCode, errorMessage, "text/html");
    }

    static get PRODUCT_NOT_FOUND() {
        return new ErrorResponse(404, "Product not found");
    }

    static get PRODUCT_HAS_NO_ID() {
        return new ErrorResponse(400, "Product id cannot be empty");
    }

}

module.exports = ErrorResponse;
