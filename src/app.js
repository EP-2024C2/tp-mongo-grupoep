const express = require('express')
const dbConnect = require('./db/mongodb').connectToDatabase

const app = express()

app.use(express.json())


const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  await dbConnect()
  console.log(`Escuchando en el puerto ${PORT}`)
})

