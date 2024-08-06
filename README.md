Link Management API
This API provides endpoints for managing links, including creating, retrieving, and redirecting links.

Endpoints
GET /links
Retrieves all links for a specific user.
Requires a userId query parameter.
Returns a JSON response with the following properties:
success: A boolean indicating whether the request was successful.
data: An array of link objects.
message: A string describing the result of the request.
POST /links
Creates a new link.
Requires a JSON body with the following properties:
target: The URL of the link.
slug: A unique slug for the link.
title: The title of the link.
user: The ID of the user creating the link.
Returns a JSON response with the following properties:
success: A boolean indicating whether the request was successful.
data: The created link object.
message: A string describing the result of the request.
GET /links/:slug
Redirects to the target URL of a link.
Requires a slug parameter in the URL path.
Returns a redirect response to the target URL.
Models
User
Represents a user in the system.
Has an id property.
Link
Represents a link in the system.
Has the following properties:
target: The URL of the link.
slug: A unique slug for the link.
title: The title of the link.
user: The ID of the user who created the link.
views: The number of times the link has been viewed.
Dependencies
express: A Node.js web framework.
mongoose: A MongoDB ORM for Node.js.
Usage
Install dependencies: npm install
Start the server: node server.js
Use a tool like curl or a REST client to interact with the API.
Note: This README assumes that the code is part of a larger project with a server.js file that sets up an Express.js server. You may need to modify the instructions to fit your specific use case.

API Endpoints
GET /links
Request: GET /links?userId=<userId>
Response: JSON with success, data, and message properties
POST /links
Request: POST /links with target, slug, title, and user properties in the request body
Response: JSON with success, data, and message properties
GET /links/:slug
Request: GET /links/<slug>
Response: Redirect to the target URL of the link
Error Handling
If a user is not found, a 404 error is returned with a JSON response containing an error message.
If a link is not found, a 404 error is returned with a JSON response containing an error message.
If an error occurs while creating a link, a 500 error is returned with a JSON response containing an error message.