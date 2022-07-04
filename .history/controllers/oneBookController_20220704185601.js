function oneBookController() {
  function get(req, res) {
    return res.json(req.book);
  }
}

module.exports = oneBookController;
