function oneBookController() {
  function get(req, res) {
    return res.json(req.book);
  }

  function put() {
    
  }
  return { get };
}

module.exports = oneBookController;
