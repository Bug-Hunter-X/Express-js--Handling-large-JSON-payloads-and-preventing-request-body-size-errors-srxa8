# Express.js: Handling large JSON payloads and preventing request body size errors

This repository demonstrates a common issue in Express.js applications where processing large JSON payloads can lead to crashes or 500 errors due to exceeding the default request body size limit.  The solution showcases how to increase this limit to accommodate larger requests.

## Bug

The `server.js` file contains an Express.js application that attempts to process a POST request containing a large JSON object.  Without modifications, this will likely result in an error when the request body size exceeds the default limit (often 100kb).

## Solution

The `server-fixed.js` file demonstrates the solution by using `express.json()` with the `limit` option to increase the maximum request body size.  This allows the server to handle larger JSON payloads without encountering errors.

## Running the code

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the required dependencies.
4. Run `node server.js` (for the buggy version) or `node server-fixed.js` (for the fixed version).
5. Send a POST request to `/users` with a large JSON payload (using a tool like Postman or curl) to observe the behavior.