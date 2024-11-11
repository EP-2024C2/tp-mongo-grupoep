const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')

const componenteSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    descripcion : {type : Schema.Types.String,required:true}
})

const Componente = mongoose.model('Componente',componenteSchema);

module.exports = Componente;