const {Router} = require('express')
const {componentesControllers} = require('../controllers')

const routes = Router()

routes.get('/componentes',componentesControllers.getAllComponentes())

module.exports = routes