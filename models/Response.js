class Response {
    constructor(statusCode, body, contentType) {
        console.log("Response created: " + statusCode);
        this.statusCode = statusCode;
        this.body = body;
        this.headers = {
            contentType: contentType
        };
    }
}

module.exports = Response;
