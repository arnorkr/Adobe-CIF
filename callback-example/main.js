const HttpClient = require('node-rest-client').Client;

const SuccessResponse = require('../models/SuccessResponse.js');
const ErrorResponse = require('../models/ErrorResponse.js');

/**
 * An action to retrieve product information by product ID
 *
 * @param {{id: number}} args JSON-Object with an ID property
 * @returns {Promise<Response>} a promise of an HTTP response with either product information or error messages
 */
function main(args) {
 console.log("Constructing response...");

 return new Promise((resolve, reject) => {
         return new HttpClient()
             .get(formatRequest(args.id), (data, response) => {
                 return resolve(createResponse(data, response.statusCode));
             })
             .on('error', error => reject(new ErrorResponse(500, error.message)));
     }
 );
}

/**
 * Creates a response from the data object
 * @param {Object} data an unformatted JSON-Object
 * @param {number} statusCode the status code of the server response
 * @returns {Response} a success response with formatted product data or an error response in case of an error
 */
function createResponse(data, statusCode) {
    return (statusCode === 200) ? new SuccessResponse(data) : new ErrorResponse(statusCode);
}

/**
 * Formats the URL to the backend path of the product
 * @param {number} productId
 * @returns {string} a formatted URL to the commerce backend
 */
function formatRequest(productId) {
    const backendUrl = 'https://adobeioruntime.net/apis/25152_54910/my-commerce-backend/products/';
    return backendUrl + productId;
}

module.exports.main = main;
