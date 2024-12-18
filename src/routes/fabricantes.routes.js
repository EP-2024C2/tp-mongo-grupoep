const {Router} = require('express')
const {fabricantesController} = require('../controllers')
const {Producto, Fabricante} = require ('../schemas')
const validateId = require('../middlewares/validateId')
const validateSchema = require('../middlewares/schemaValidator')
const validateDelete = require('../middlewares/validateDelete')

const routes = Router()

routes.get('/fabricantes',fabricantesController.getAllFabricantes)
routes.get('/fabricantes/:id', validateId(Fabricante), fabricantesController.getFabricanteById)
routes.get('/fabricantes/:id/productos', validateId(Fabricante), fabricantesController.getProductosByFabricante)

routes.post('/fabricantes',validateSchema(Fabricante), fabricantesController.createFabricante)

routes.put('/fabricantes/:id', validateId(Fabricante), validateSchema(Fabricante), fabricantesController.updateFabricante)

routes.delete('/fabricantes/:id', validateId(Fabricante), validateDelete(Producto, 'fabricantes'), fabricantesController.deleteFabricante)

module.exports = routes