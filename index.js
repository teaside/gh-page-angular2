const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('./server/routes/api');

const app = express();
app.use(express.static(path.join(__dirname, './dist/gh-page-angular2')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/gh-page-angular2/index.html'));
});
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Runnin on port ' + port));
