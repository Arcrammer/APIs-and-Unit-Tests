var express = require('express');
var router = express.Router();

router.get('/v1', function (req, res, next) {
  res.json({
    "Hello": "World"
  });
});

module.exports = router;
