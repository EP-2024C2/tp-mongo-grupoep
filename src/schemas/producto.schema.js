const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')
const Componente = require('./componente.schema')

const productoSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    descripcion : {type : Schema.Types.String},
    precio : {type : Schema.Types.Number, required:true},
    pathImg : {type : Schema.Types.String},
    componentes:[Componente.schema],
    fabricantes:[{type: Schema.Types.ObjectId,ref: 'Fabricante'}]
})

productoSchema.set("toJSON", {
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        delete ret._id;
    },
});

const Producto = mongoose.model('Producto',productoSchema);

module.exports = Producto;