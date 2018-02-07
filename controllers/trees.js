const Tree = require('../models/tree')

exports.list = async (ctx, next) => {
  try {
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
    ctx.body = await Tree.find()
  } catch (err) {
    console.error(err)
    ctx.throw(500)
  }
}
