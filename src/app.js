const express = require('express')
const dbConnect = require('./db/mongodb').connectToDatabase
const routes = require('./routes')
const createSemilla = require('./seeders/semilla')
const app = express()

app.use(express.json())

app.use(routes)



const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  await dbConnect()
  //createSemilla()
  console.log(`Escuchando en el puerto ${PORT}`)
})

