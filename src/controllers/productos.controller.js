const {Producto,Fabricante} = require('../schemas')
const mongoose = require('../db/mongodb').mongoose

const controller ={}

controller.getAllProductos = async (_,res) => {
    const productos = await Producto.find({})
    res.status(200).json(productos)
}

controller.getProductoById = async (req, res) => {
    const id = req.params.id
    const producto = await Producto.findById(id);
    res.status(200).json(producto);
}

controller.getFabricantesByProductId = async(req,res)=>{
  const id = req.params.id;
  const producto = await Producto.findById(id).populate("fabricantes");
  res.status(200).json(producto);
}

controller.getComponentesByProductId = async(req,res) =>{
  const id = req.params.id;
  const producto = await Producto.findById(id)
  res.status(200).json(producto)
}

controller.createProducto = async (req, res) => {
  const producto = await Producto.create(req.body);
  res.status(201).json(producto);
}

controller.addComponenteToProducto = async(req,res)=>{
  const id = req.params.id
  componente = req.body
  const producto = await Producto.findById(id)
  producto.componentes.push(componente);
  await producto.save()
  res.status(201).json(producto)
}

controller.addFabricanteToProducto = async (req,res)=>{
  const id = req.params.id
  const producto = await Producto.findById(id);
  const nuevoFabricante = { ...req.body, productos: [new mongoose.Types.ObjectId(id)] };
  const fabricante = await Fabricante.create(nuevoFabricante);
  producto.fabricantes.push(fabricante._id);
  await producto.save();
  res.status(201).json(producto);
}

controller.updateProducto = async (req, res) => {
  const idDelProducto = req.params.id
  const {nombre,descripcion,precio,pathImg,componentes} = req.body
  const producto = await Producto.updateOne({_id:idDelProducto},{nombre,descripcion,precio,pathImg,componentes})
  res.status(200).json(producto)
}

controller.deleteProducto = async (req, res) => {
  const id = req.params.id
  const producto = await Producto.deleteOne({_id:id})
  res.status(200).json(producto)
}

module.exports = controller