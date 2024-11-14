const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')
const Componente = require('./componente.schema')

const productoSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    descripcion : {type : Schema.Types.String},
    precio : {type : Schema.Types.Number, required:true},
    pathImg : {type : Schema.Types.String},
    componentes:[Componente.schema]
})

const Producto = mongoose.model('Producto',productoSchema);

module.exports = Producto;