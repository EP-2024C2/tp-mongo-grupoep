const {Router} = require('express')
const {productosController} = require('../controllers')
const {Producto} = require ('../schemas')
const validateIdMiddleware = require('../middlewares/validateId')
const validateSchema = require('../middlewares/schemaValidator')

const routes = Router()

routes.get('/productos',productosController.getAllProductos)
routes.get('/productos/:id',validateIdMiddleware.validateId(Producto), productosController.getProductoById)
routes.get('/productos/:id/fabricantes',validateIdMiddleware.validateId(Producto), productosController.getFabricantesByProductId)
routes.get('/productos/:id/componentes',validateIdMiddleware.validateId(Producto), productosController.getComponentesByProductId)

routes.post('/productos',validateSchema(Producto), productosController.createProducto)
routes.post('/productos/:id/componentes',validateIdMiddleware.validateId(Producto), productosController.addComponenteToProducto)
routes.post('/productos/:id/fabricantes',validateIdMiddleware.validateId(Producto), productosController.addFabricanteToProducto)

routes.put('/productos/:id',validateIdMiddleware.validateId(Producto), productosController.updateProducto)

routes.delete('/productos/:id',validateIdMiddleware.validateId(Producto), productosController.deleteProducto)

module.exports = routes