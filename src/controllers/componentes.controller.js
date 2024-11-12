const {componente} = require('../mongoSchemas')

const controller ={}

controller.getAllComponentes = async (_,res) => {
    const componentes = await componente.findAll({})
    res.status(200).json(componentes)
}

module.exports = controller