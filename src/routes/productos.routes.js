const {Router} = require('express')
const {productosController} = require('../controllers')

const routes = Router()

routes.get('/productos',productosController.getAllProductos)
routes.get('/productos/:id',productosController.getProductoById)
//routes.get('/componentes/:id/productos',componentesController.getProductosByComponente)

routes.post('/productos',productosController.createProducto)

routes.put('/productos/:id',productosController.updateProducto)

routes.delete('/productos/:id',productosController.deleteProducto)

module.exports = routes