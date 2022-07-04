const should = require('should');
const sinon = require('sinon');
const booksController = require('../controllers/booksController');

describe('Books Controller test: ', () => {
  describe('Post method', () => {
    it('should, not allow an empty title on post', () => {
      const Book = function (book) { this.save = () => {}};

      cosnt req = {
        body: {
          authr: 'John'
        }
      };

      const res = {
        status,
        send,
        json
      }
    });
  });
});
