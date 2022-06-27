const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT;

bookRouter.route('/books')
  .get()

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
