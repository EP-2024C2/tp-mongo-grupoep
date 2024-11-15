const {Producto} = require('../schemas')
const middleware = {}
const mongoose = require('../db/mongodb').mongoose

middleware.validateId = async (req, res, next) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `El ID proporcionado no tiene un formato válido: ${id}` })
  }

  const producto = await Producto.findById(id)
  
  if(!producto){
    return res.status(404).json({message:`no existe un producto con id: ${id}`})
  }
  next()
}

module.exports = middleware