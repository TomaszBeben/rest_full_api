function bookController(Book) {
  function post(req, res) {
    const book = new Book(req.body);

    book.save();
    return res.status(201).json(book);
  }
}

module.export = bookController;
