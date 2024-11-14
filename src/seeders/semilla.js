const { Componente,Producto,Fabricante } = require('../schemas')


async function seedDatabase() {
  try {
    await Componente.deleteMany({})
    await Producto.deleteMany({})
    await Fabricante.deleteMany({})

    const componentes = await Componente.insertMany([
      {
        nombre: "Pantalla OLED 6.5 pulgadas",
        descripcion: "Pantalla de alta definición"
      },
      {
        nombre: 'Bateria 4000 mAh',
        descripcion: 'Batería de larga duración'
      },
      {
        nombre: 'Procesador Intel i7',
        descripcion: 'Procesador de octava generación'
      },
      {
        nombre: 'SSD 1TB',
        descripcion: 'Disco sólido de 1TB de capacidad'
      }
    ])
    
    const productos = await Producto.insertMany([
      {
        nombre: 'Laptop X200', 
        descripcion: 'Una laptop de alto rendimiento', 
        precio: 1200.99, 
        pathImg: "/images/productos/laptop-x200.jpg"
      },
      {
        nombre: 'Smartphone S5', 
        descripcion: 'Teléfono inteligente con pantalla OLED', 
        precio: 799.99, 
        pathImg: "/images/productos/smartphone-s5.jpg"
      }
  
    ])

    const fabricantes = await Fabricante.insertMany([
      {
        nombre: 'TechCorp',
        numeroContacto: "+123456789",
        direccion: "1234 Elm St, Ciudad",
        pathImgPerfil: "/images/fabricantes/techcorp.jpg"
      },
      {
        nombre: 'Innovatech',
        numeroContacto: "+987654321",
        direccion: "4567 Oak Ave, Ciudad",
        pathImgPerfil: "/images/fabricantes/innovatech.jpg"
      }
    ])

    console.log("Base de datos poblada con componentes")

  } catch (error) {
    console.error('Error al poblar la base de datos:', error)
  }
}

module.exports = seedDatabase