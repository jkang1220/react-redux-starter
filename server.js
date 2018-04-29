const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index');

const app = express();

app.use(express.static(`${__dirname}/client/dist`));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
