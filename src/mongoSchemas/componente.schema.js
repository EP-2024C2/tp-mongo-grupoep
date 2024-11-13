const mongoose = require('../db/mongodb').mongoose;
const {Schema} = require('mongoose')

const componenteSchema = new mongoose.Schema({
    nombre:{type : Schema.Types.String , required:true},
    descripcion : {type : Schema.Types.String,required:true}
})

componenteSchema.set("toJSON", {
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        delete ret._id;
    },
  });

const Componente = mongoose.model('Componente',componenteSchema);

module.exports = Componente