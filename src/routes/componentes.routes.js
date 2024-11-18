const {Router} = require('express')
const {componentesController} = require('../controllers')
const {Componente} = require ('../schemas')
const validateId = require('../middlewares/validateId')
const validateSchema = require('../middlewares/schemaValidator')

const routes = Router()

routes.get('/componentes',componentesController.getAllComponentes)
routes.get('/componentes/:id', validateId(Componente), componentesController.getComponenteById)

routes.post('/componentes',validateSchema(Componente), componentesController.createComponente)

routes.put('/componentes/:id', validateId(Componente), validateSchema(Componente), componentesController.updateComponente)

routes.delete('/componentes/:id', validateId(Componente), componentesController.deleteComponente)

module.exports = routes