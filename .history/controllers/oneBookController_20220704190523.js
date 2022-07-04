function oneBookController() {
  function get(req, res) {
    return res.json(req.book);
  }

  function put(req, res) {

  }
  return { get };
}

module.exports = oneBookController;
