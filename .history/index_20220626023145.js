const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
