// console.log("hello world ! 👌🤣🤣")

const http = require('http');
const port = 9000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Hello highfive ! 👌</h1>');
})

// server.listen(port, hostname, () => {
//     console.log("Server prêt sur", hostname, ":", port)
// });

server.listen(port, hostname, () => {
    console.log(`Server prêt sur le http://${hostname}:${port}`)
});