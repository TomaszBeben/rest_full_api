const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT;

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'this is my book route' };
    res.json(response);
  });

app.use('/api')

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
