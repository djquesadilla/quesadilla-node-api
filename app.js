const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.listen(port, () => {
  debug(`Running on port ${chalk.green(port)}`);
});
