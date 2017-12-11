'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const LOCAL_PORT = 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/heartbeat', (req, res) => {
    res.json();
});

/* eslint no-console: "off" */
app.listen(LOCAL_PORT, function() {
  console.log(`app is listening on port ${LOCAL_PORT}`);
});
