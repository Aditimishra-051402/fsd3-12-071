import http from 'http';

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h2>Hello from server</h2>");
    console.log("Server hit by client");
});

server.listen(4444, () => { 
    console.log("Server is running...");
});