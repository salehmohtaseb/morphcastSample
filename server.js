const http = require('http');
const host = 'localhost';
const port = '3000';
const fs = require('fs').promises;

const requestListener = (req, res) => {
    fs.readFile(__dirname + '/index.html')
        .then((content) => {
            res.setHeader("content-type", "text/html");
            res.writeHead(200);
            res.end(content);
        }).catch((err) => {
            console.log('error aquired', err)
        })
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`start server at ${host}:${port}`)
})