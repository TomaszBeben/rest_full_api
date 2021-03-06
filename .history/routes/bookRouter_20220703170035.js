/* eslint-disable no-param-reassign */
const express = require('express');

function routes(Book) {
  const bookRouter = express.Router();

  bookRouter.route('/books')
    .post((req, res) => {
      const book = new Book(req.body);

      book.save();
      return res.status(201).json(book);
    })
    .get((req, res) => {
      const query = {};
      if (req.query.genre) {
        query.genre = req.query.genre;
      }
      Book.find(query, (err, book) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
    });

  bookRouter.use('/books/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      return res.status(404);
    });
  });
  bookRouter.route('/books/:id')
    .get((req, res) => res.json(req.book))
    .put((req, res) => {
      const {book} = req;
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.read = req.body.read;
        book.save();
        return res.json(book);
      });
    });
  return bookRouter;
}

module.exports = routes;
