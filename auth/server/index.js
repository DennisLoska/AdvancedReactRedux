//Starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');

const app = express();

// DB setup
mongoose.connect('mongodb://localhost/apiAuth');

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser({type: '*/*'}))
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port: ', port);

