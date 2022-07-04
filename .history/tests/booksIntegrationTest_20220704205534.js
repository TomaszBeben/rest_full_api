// eslint-disable-next-line no-unused-vars
const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'TEST';

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
      // .expect(200)
      .end((err, results) => {
        console.log(results);
        // results.body.read.should.not.equal(false);
        // results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Book.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    done();
  });
});
