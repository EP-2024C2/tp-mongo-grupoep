const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL ?? "mongodb://admin:admin1234@localhost:27017/grupoEP?authSource=admin"

async function connectToDatabase(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Conexión a mongo realizada con éxito")
    }catch(err){
        console.error("Error al conectarse a la base de datos de mongo", err.message)
    }
}

module.exports = {mongoose,connectToDatabase}