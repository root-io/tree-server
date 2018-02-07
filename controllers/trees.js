const Tree = require('../models/tree')

exports.list = async (ctx, next) => {
  try {
    const page = ctx.request.query.page
    const perPage = 3
    const start = (page - 1) * perPage
    // ctx.body = [
    //   { specie: "Acacia" },
    //   { specie: "Baobab" },
    //   { specie: "Cedar" },
    //   { specie: "Cypress" },
    //   { specie: "Platanus" },
    //   { specie: "Olive Tree" },
    //   { specie: "Oak" },
    //   { specie: "Pine" },
    //   { specie: "Sequoia" },
    //   { specie: "Maple" },
    //   { specie: "Elm" }
    // ]
    const total = await Tree.count()
    const trees = await Tree.find().limit(perPage).skip(start)
    ctx.body = { total: total, data: trees }
  } catch (err) {
    console.error(err)
    ctx.throw(500)
  }
}
