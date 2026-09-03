import http from 'http';

const server = http.createServer(req, res => {
  console.log("Server hit by client");
  req.write("<h2>Hello from server</h2>");
  res.end();

});
server.listen(4444, () => {
  console.log("Server is running...");
});