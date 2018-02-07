const Router = require('koa-joi-router')
const router = new Router()
const trees = require('../controllers/trees')

router.route({
  method: 'get',
  path: '/trees',
  handler: trees.list
})

module.exports = router
