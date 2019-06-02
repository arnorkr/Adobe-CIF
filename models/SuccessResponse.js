const Response = require('./Response.js');

class SuccessResponse extends Response {
    constructor(rawData) {
        super(200, new ProductData(rawData), "application/json");
    }
}

module.exports = SuccessResponse;
