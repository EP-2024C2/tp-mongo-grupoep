const {Componente} = require('../mongoSchemas')

const controller ={}

controller.getAllComponentes = async (_,res) => {
    const componentes = await Componente.find({})
    res.status(200).json(componentes)
}

module.exports = controller