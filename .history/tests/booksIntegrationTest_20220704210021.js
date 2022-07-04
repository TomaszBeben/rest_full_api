require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../index');

const Book = mongoose.model('Book');

describe('Book Crud Test', () => {
  it('should allow a book to be posted and return read and _it', (done) => {
    const bookPost = { title: 'My Book', author: 'Jon', genre: 'Fiction' };
    const agent = request.agent(app);
    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        //console.log(results);
        //results.body.read.should.not.equal(false);
        results.should.have.property('_id');
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
