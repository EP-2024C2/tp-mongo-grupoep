const {Router} = require('express')
const {fabricantesController} = require('../controllers')

const routes = Router()

routes.get('/fabricantes',fabricantesController.getAllFabricantes)
routes.get('/fabricantes/:id',fabricantesController.getFabricanteById)
//routes.get('/componentes/:id/productos',componentesController.getProductosByComponente)

routes.post('/fabricantes',fabricantesController.createFabricante)
routes.post('/fabricantes/:id/productos',fabricantesController.addProductoToFabricante)

routes.put('/fabricantes/:id',fabricantesController.updateFabricante)

routes.delete('/fabricantes/:id',fabricantesController.deleteFabricante)

module.exports = routes