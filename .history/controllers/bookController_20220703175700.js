function bookController(Book) {
  function post(req, res) {
    const book = new Book(req.body);
  }
}

module.export = bookController;
