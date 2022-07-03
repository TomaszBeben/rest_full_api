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
    })
    .put((req, res) => {
      Book.findById(req.params.id, (err, books) => {
        if (err) {
          return res.send(err);
        }
        books.title = req.body.title;
        books.author = req.body.author;
        books.genre = req.body.genre;
        books.read = req.body.read;
        books.save();
        return res.json(books);
      });
    })
    .patch((req, res) => {
      
    })
  return bookRouter;
}

module.exports = routes;
