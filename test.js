/* eslint-env and, mocha */
/* eslint-disable no-unused-expressions */
const app = require('./app')
const request = require('supertest').agent(app.listen())
require('should')

describe('Tree', function () {
  describe('GET /trees', function () {
    it('should see a list of trees', function (done) {
      request
        .get('/trees')
        .expect(200, function (err, res) {
          if (err) return done(err)
          res.body.should.be.json
          // res.body.should.have.property('trees', '')
          done()
        })
    })
  })
})
