const logger = require('koa-logger')
const { encodeMongoURI } = require('./utils/mongo')
const cors = require('@koa/cors')
const mongoose = require('mongoose')
const treeRoutes = require('./routes/trees')
const c2k = require('koa-connect')
const path = require('path')

const connect = () => {
  mongoose.connect(encodeMongoURI('mongodb://localhost/tree'))
    .catch(console.error)
}
connect()

mongoose.connection.on('error', err => {
  console.error(err)
})

const Koa = require('koa')
const app = module.exports = new Koa()

app.use(logger())
app.use(cors())

app.use(treeRoutes.middleware())
app.use(c2k(require('forest-express-mongoose').init({
  modelsDir: path.join(__dirname, 'models'), // Your models directory.
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  mongoose: require('mongoose') // The mongoose database connection.
})))

if (!module.parent) app.listen(3000)
