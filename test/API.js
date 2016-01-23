var request = require('supertest');
var express = require('express');
var app = require('../app');

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
