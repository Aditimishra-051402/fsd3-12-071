import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log("Request received...");
        const products = {
            name: "Iphone 14",
            price: 120000,
            qty:4,
            discount: 10,
        };
        res.end(JSON.stringify(products));
});
server.listen(3000, () => {
    console.log("Server is running at 3000...");
});
// npm = node package manager