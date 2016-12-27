'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dev';
const debug = require('debug')('recipe:server');

//ask about module caching!!!
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(morgan('dev'));
app.use(cors());

const server = module.exports = app.listen(PORT, function(){
  debug(`server @ ${PORT}`);
});

server.isRunning = true;
