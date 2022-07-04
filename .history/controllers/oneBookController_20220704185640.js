function oneBookController() {
  function get(req, res) {
    return res.json(req.book);
  }
  return { get };
}

module.exports = oneBookController;
