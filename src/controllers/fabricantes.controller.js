const {Fabricante, Producto} = require('../schemas')
const mongoose = require('../db/mongodb').mongoose;

const controller ={}

controller.getAllFabricantes = async (_,res) => {
    const fabricantes = await Fabricante.find({})
    res.status(200).json(fabricantes)
}

controller.getFabricanteById = async (req, res) => {
    const id = req.params.id
    const fabricante = await Fabricante.findById(id);
    res.status(200).json(fabricante);
}

controller.createFabricante = async (req, res) => {
    const fabricante = await Fabricante.create(req.body);
    res.status(201).json(fabricante);
}

controller.addProductoToFabricante = async(req,res)=>{
  const id = req.params.id
  console.log(id)
  const nuevoProducto = { ...req.body,fabricanteId: new mongoose.Types.ObjectId(id)}
  console.log(nuevoProducto)
  const producto = await Producto.create(nuevoProducto)
  console.log(nuevoProducto)
  res.status(201).json(producto)
}

controller.updateFabricante = async (req, res) => {
  const idDelFabricante = req.params.id
  const {nombre, direccion,numeroContacto,pathImgPerfil} = req.body
  const fabricante = await Fabricante.updateOne({_id:idDelFabricante},{nombre,direccion,numeroContacto,pathImgPerfil})
  res.status(200).json(fabricante)
}

controller.deleteFabricante = async (req, res) => {
  const id = req.params.id
  const fabricante = await Fabricante.deleteOne({_id:id})
  res.status(200).json(fabricante)
}

module.exports = controller