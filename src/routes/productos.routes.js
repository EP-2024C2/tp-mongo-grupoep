const {Router} = require('express')
const {productosController, fabricantesController} = require('../controllers')
const {Producto, Componente, Fabricante} = require ('../schemas')
const validateId = require('../middlewares/validateId')
const validateSchema = require('../middlewares/schemaValidator')
const validateDelete = require('../middlewares/validateDelete')

const routes = Router()

routes.get('/productos',productosController.getAllProductos)
routes.get('/productos/:id',validateId(Producto), productosController.getProductoById)
routes.get('/productos/:id/fabricantes',validateId(Producto), productosController.getFabricantesByProductId)
routes.get('/productos/:id/componentes',validateId(Producto), productosController.getComponentesByProductId)

routes.post('/productos',validateSchema(Producto), productosController.createProducto)
routes.post('/productos/:id/componentes',validateId(Producto), validateSchema(Componente), productosController.addComponenteToProducto)
routes.post('/productos/:id/fabricantes',validateId(Producto), validateSchema(Fabricante), productosController.addFabricanteToProducto)

routes.put('/productos/:id',validateId(Producto), productosController.updateProducto)

routes.delete('/productos/:id',validateId(Producto),validateDelete(Fabricante,'productos'),productosController.deleteProducto)

module.exports = routes