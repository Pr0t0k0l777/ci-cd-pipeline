const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello!\n');
});

const port = 3000;
// Démarre le serveur SEULEMENT si on lance "node app.js" directement
if (require.main === module ) {
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

// Rend le serveur importable par le test
module.exports = server;

