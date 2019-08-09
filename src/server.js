const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

const routes = require('./routes');

server.use(express.json());
server.use(cors());
server.use(routes);

mongoose.connect('mongodb://localhost:27017/omnistack', { useNewUrlParser: true });

server.listen(3001);