const express = require('express')
const dbConnect = require('./db/mongodb').connectToDatabase
const routes = require('./routes')

const app = express()

app.use(express.json())
//hola soy un comentario 
app.use(routes)


const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  await dbConnect()
  console.log(`Escuchando en el puerto ${PORT}`)
})

