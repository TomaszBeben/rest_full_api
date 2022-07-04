const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../index');

const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book Crud Test', () => {
  it('should allow a book to be posted and return read and _id', (done) => {
    const bookPost = {
      title: 'my book',
      author: 'Tomek',
      genre: 'coding',
    };

    agent.post('api/books')
      .send(bookPost)
      .expect(200)
      .end((err, result) => {
        result.body.read.should.not.equal('false');
        result.body.should.have.property('_id');
        done();
      });
  });
});
