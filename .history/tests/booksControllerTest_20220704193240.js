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
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]}`)
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
