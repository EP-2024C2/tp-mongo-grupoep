const {Router} = require('express')
const {productosController} = require('../controllers')

const routes = Router()

routes.get('/productos',productosController.getAllProductos)
routes.get('/productos/:id',productosController.getProductoById)
routes.get('/productos/:id/fabricantes',productosController.getFabricantesByProductId)

routes.post('/productos',productosController.createProducto)
routes.post('/productos/:id/componentes', productosController.addComponenteToProducto)
//routes.post('/productos/:id/fabricantes',productosController.addFabricanteToProducto)

routes.put('/productos/:id',productosController.updateProducto)

routes.delete('/productos/:id',productosController.deleteProducto)

module.exports = routes