var http = require('http');

http.createServer(function(request, response) {
	// Semd HTTP header.
	// HTTP Status 200 OK.
	// Content-Type: text/plain.
	response.writeHead(200, { 'Content-Type' : 'text/plain'});

	// Set the body of the response.
	response.end('Hello World!\n');
}).listen(8080);

// Say that the server is ready.
console.log('Server running at http://127.0.0.1:8080/!');