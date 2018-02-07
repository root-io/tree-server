const Router = require('koa-joi-router')
const Joi = Router.Joi
const router = new Router()
const trees = require('../controllers/trees')

router.route({
  method: 'get',
  path: '/trees',
  validate: {
    query: {
      page: Joi.number().integer().min(1).required()
    }
  },
  handler: trees.list
})

module.exports = router
