const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    descripcion : {type : Schema.Types.String, required:true},
    precio : {type : Schema.Types.Number, required:true},
    pathImgPerfil : {type : Schema.Types.String, required:true}
})

const Producto = mongoose.model('Producto',productoSchema);

module.exports = Producto;