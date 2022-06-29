const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/RestApi');
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
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
