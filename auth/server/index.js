//Starting point of the application
const express = require('express');
const http = require('http');
const boyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// App setup

// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port: ', port);

