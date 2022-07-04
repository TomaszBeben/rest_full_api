function oneBookController() {
  function get(req, res) {
    return res.json(req.book);
  }

  function put(req, res) {
    const { book } = req;
    book.title = req.body.title;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.read = req.body.read;
    req.book.save((error) => {
      if (error) {
        return res.send(error);
      }
      return res.json(book);
    });
  }

  return { get, put };
}

module.exports = oneBookController;
