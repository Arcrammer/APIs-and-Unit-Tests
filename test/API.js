var request = require('supertest');
var express = require('express');
var app = express();
var router = express.Router();

app.get('/api/v1', function (req, res, next) {
  res.json({
    "Hello": "World"
  });
});

describe('API', function () {
  it("Says 'Hello' is 'World'", function (done) {
    request(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200, {
        Hello: 'World'
      }, done);
  });
});
