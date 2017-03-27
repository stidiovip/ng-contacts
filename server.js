// The dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// The API routes
const api = require('./server/routes/api');
const app = express();

// Parser middleware for POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This is where the static assets are
app.use(express.static(path.join(__dirname, 'dist')));

// Use the '/api' path for api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = '9484';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Start the server
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));