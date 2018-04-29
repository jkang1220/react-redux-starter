const express = require('express');
const bodyParser = require('body-parser');
const items = require('./database/index');

const app = express();

app.use(express.static(`${__dirname}/client/dist`));

app.use(bodyParser.json());

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/item', (req, res) => {
  items.saveItem(req.body.quantity, req.body.description, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
