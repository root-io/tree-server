/* eslint-env and, mocha */
/* eslint-disable no-unused-expressions */
const app = require('./app')
const request = require('supertest').agent(app.listen())
require('should')

describe('Tree', function () {
  describe('GET /trees?page=1', function () {
    it('should see a list of trees', function (done) {
      request
        .get('/trees?page=1')
        .expect(200, function (err, res) {
          if (err) return done(err)
          res.body.should.be.json
          res.body.total.should.be.Number
          res.body.data.should.be.instanceof(Array)
          done()
        })
    })
  })
})
