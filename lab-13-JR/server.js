'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const debug = require('debug')('recipe:server');

app.use(morgan('dev'));
app.use(cors());

const server = module.exports = app.listen(PORT, function(){
  debug(`server @ ${PORT}`);
});

server.isRunning = true;
