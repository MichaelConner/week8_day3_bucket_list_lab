const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucket_list');
    const listItemsCollection = db.collection('listitems');
    const listItemsRouter = createRouter(listItemsCollection);
    app.use('/api/listitems', listItemsRouter);
  })
  .catch(console.err)

app.listen(3000, function () {
  console.log(`Listening on ${this.address().port}`);
});
