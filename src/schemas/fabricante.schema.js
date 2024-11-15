const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')

const fabricanteSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    direccion : {type : Schema.Types.String, required:true},
    numeroContacto : {type : Schema.Types.Number, required:true},
    pathImgPerfil : {type : Schema.Types.String},
    productos:[{type: Schema.Types.ObjectId,ref: 'Producto'}]
})

fabricanteSchema.set("toJSON", {
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        delete ret._id;
    },
  });


const Fabricante = mongoose.model('Fabricante',fabricanteSchema);

module.exports = Fabricante;