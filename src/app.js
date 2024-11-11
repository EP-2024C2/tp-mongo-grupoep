const express = require('express')
const dbConnect = require('./db/mongodb').connectToDatabase
const {componenteSchema} = require('./mongoSchemas/index')
const app = express()

app.use(express.json())

app.get("/",async(req,res)=>{
    const componentes = await componenteSchema.find({});
    res.status(200).json(componentes)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Escuchando en el puerto ${PORT}`)
  await dbConnect()
})

