const {Router} = require('express')
const {componentesController} = require('../controllers')

const routes = Router()

routes.get('/componentes',componentesController.getAllComponentes)

module.exports = routes