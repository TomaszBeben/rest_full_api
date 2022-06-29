const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT;
const db = mongoose.connect('mongodb://localhost:27017/RestApi');
const Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter.route('/books')
  .post((req, res) => {
    const book = new Book(req.body);

    console.log(book);
    res.json(book);
  })
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });
bookRouter.route('/books/:id')
  .get((req, res) => {
    Book.findById(req.params.id, (err, books) => {
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
