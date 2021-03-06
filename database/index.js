const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_items');
mongoose.Promise = Promise;

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = (callback) => {
  Item.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const saveItem = (quantity, description, callback) => {
  Item.create({ quantity, description }, (err, item) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};

const deleteItem = (id) => {
  Item.find({"_id": ObjectId(`${id}`)}, (err, item) => {
    console.log("item found: ", item);
  });
};


module.exports = {
  selectAll,
  saveItem
};