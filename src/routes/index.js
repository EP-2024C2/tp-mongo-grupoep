const {Router} = require('express')
const componentesRoute = require('./componentes.routes')
const productosRoute= require('./productos.routes')
const fabricantesRoute= require('./fabricantes.routes')


const routes = Router()

routes.use(componentesRoute)
routes.use(productosRoute)
routes.use(fabricantesRoute)


module.exports = routes