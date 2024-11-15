const {Componente} = require('../schemas')

const controller ={}

controller.getAllComponentes = async (_,res) => {
  const componentes = await Componente.find({})
  res.status(200).json(componentes)
}

controller.getComponenteById = async (req, res) => {
    const id = req.params.id
    const componente = await Componente.findById(id);
    res.status(200).json(componente);
}

/*controller.getProductosByComponente = async(req,res) => {
  const id = req.params.id
  const componente = await Componente.findById(id);
  res.status(200).json(componente)
}*/

controller.createComponente = async (req, res) => {
  const componente = await Componente.create(req.body);
  res.status(201).json(componente);
}

controller.updateComponente = async (req, res) => {
  const idDelComponente = req.params.id
  const {nombre, descripcion} = req.body
  const componente = await Componente.updateOne({_id:idDelComponente},{nombre,descripcion})
  res.status(200).json(componente)
}

controller.deleteComponente = async (req, res) => {
    const id = req.params.id
    const componente = await Componente.deleteOne({_id:id})
    res.status(200).json(componente)
}

module.exports = controller