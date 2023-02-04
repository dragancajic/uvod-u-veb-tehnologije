// 3:19 PM Saturday, February 04, 2023


// ~ 7.2 Kreiranje HTTP serverskih aplikacija
// https://matfuvit.github.io/UVIT/vezbe/knjiga/Poglavlja/NodeJS/

// For creating a server
const http = require("http");
const server = http.createServer();

// Creating the server and running it on port 3000
const port = 3000;
server.listen(port);

// Prints a message in the terminal
// once the server is active
server.once('listening', function () {
    console.info(`Started the server on http://localhost:${port}`);
});
/*
$ node server.js

Started the server on http://localhost:3000
*/
