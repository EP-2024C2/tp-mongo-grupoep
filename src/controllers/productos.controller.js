const {Producto} = require('../mongoSchemas')

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

controller.createProducto = async (req, res) => {
  const producto = await Producto.create(req.body);
  res.status(201).json(producto);
}

controller.updateProducto = async (req, res) => {
  const idDelProducto = req.params.id
  const {nombre,descripcion,precio,pathImg} = req.body
  const producto = await Producto.updateOne({_id:idDelProducto},{nombre,descripcion,precio,pathImg})
  res.status(200).json(producto)
}

controller.deleteProducto = async (req, res) => {
  const id = req.params.id
  const producto = await Producto.deleteOne({_id:id})
  res.status(200).json(producto)
}


module.exports = controller