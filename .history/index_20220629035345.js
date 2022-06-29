const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT;

const db = mongoose.connect('mongodb://localhost/RestApi');
const Book = require('./models/bookModel');

bookRouter.route('/Books')
  .get((req, res) => {
    Book.find((err, Books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});