const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

if (process.env.ENV === 'Test') {
  console.log('This is a test');
  mongoose.connect('mongodb://localhost:27017/bookApi_Test');
} else {
  console.log('This is real DB');
  mongoose.connect('mongodb://localhost:27017/RestApi');
}

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

module.exports = app;
