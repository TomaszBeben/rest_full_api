function oneBookController() {
  function get((req, res) => res.json(req.book))
}

module.exports = oneBookController;
