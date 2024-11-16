const mongoose = require('../db/mongodb').mongoose

const validateId =(schema) => {
  return async (req, res, next) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: `El ID proporcionado no tiene un formato válido: ${id}` })
  }

  const elemento = await schema.findById(id)
  
  if(!elemento){
    return res.status(404).json({message:`no existe un elemento con id: ${id}`})
  }
  next()
}}

module.exports = validateId