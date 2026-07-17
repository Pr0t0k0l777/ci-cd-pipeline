const test = require('node:test');
const assert = require('node:assert');
const http = require('http');
const server = require('./app');

test('Le serveur répond 200 avec "Hello world!"', (t, done) => {
    server.listen(0, () => {
        const port = server.address().port
        http.get(`http://localhost:${port}`, (res) => {
            let body = '';
            res.on('data', (chunk) => { body += chunk; });
            res.on('end', () => {
                assert.strictEqual(res.statusCode, 200);
                assert.strictEqual(body, 'Hello world!\n');
                server.close();
                done();
            });
        });
    });
});