const {Router} = require('express')
const componentesRoute = require('./componentes.routes')

const routes = Router()
routes.use(componentesRoute)

module.exports = routes