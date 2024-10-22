const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Her saniyede bir "Hello World" yazdıran bir fonksiyon
const helloWorldInterval = setInterval(() => {
    console.log('Hello World');
}, 1000);

// HTTP sunucusu oluşturma
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// Sunucuyu dinlemeye başlama
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Sunucu durdurulduğunda interval'i temizleme
server.on('close', () => {
    clearInterval(helloWorldInterval);
});
