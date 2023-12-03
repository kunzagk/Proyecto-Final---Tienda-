import { http, HttpResponse } from 'msw'

const products = http.get('/ropa', () => {
  return HttpResponse.json(
    [
      {
        desc: "Parka Deportiva Hombre.",
        id: "P001",
        img: "https://falabella.scene7.com/is/image/Falabella/gsc_121358839_3001658_1?wid=1500&hei=1500&qlt=70",
        ingredients: ["Polera", "algodon"],
        name: "Parka Deportiva Hombre.",
        price: 5950
      },
      {
        desc: "Polar Outdoor Mujer.",
        id: "P002",
        img: "https://falabella.scene7.com/is/image/Falabella/16904659_1?wid=240&hei=240&qlt=70&fmt=webp",
        ingredients: ["Polera", "algodon"],
        name: "Polar Outdoor Mujer",
        price: 7250
      },
      {
        desc: "Parka azul muy bonita.",
        id: "P003",
        img: "https://falabella.scene7.com/is/image/Falabella/gsc_113932090_823215_1?wid=1500&hei=1500&qlt=70",
        ingredients: ["Polera", "algodon"],
        name: "Parka Deportiva Hombre.",
        price: 5990
      },
      {
        desc: "Parka Deportiva Hombre.",
        id: "P004",
        img: "https://falabella.scene7.com/is/image/Falabella/882674789_1?wid=240&hei=240&qlt=70&fmt=webp",
        ingredients: ["Polera", "algodon"],
        name: "Parka Deportiva Hombre.",
        price: 9590
      },
      {
        desc: "Pack 3 -Shorts Deportivo Hombre Algodón.",
        id: "P005",
        img: "https://falabella.scene7.com/is/image/Falabella/gsc_115902918_1309435_1?wid=240&hei=240&qlt=70&fmt=webp",
        ingredients: ["Polera", "algodon"],
        name: "Pack 3 -Shorts Deportivo Hombre Algodón",
        price: 6450
      },
      {
        desc: "Polar Outdoor Mujer.",
        id: "P006",
        img: "https://falabella.scene7.com/is/image/Falabella/882677338_1?wid=240&hei=240&qlt=70&fmt=webp",
        ingredients: ["Polera", "algodon"],
        name: "Polar Outdoor Mujer.",
        price: 8500
      }
    ],
    { status: 200 }
  )
})

const newProduct = http.post('/newRopa', () => {
  return HttpResponse.json(
    {
      id: '26587',
      titulo: 'New product',
      img: 'https://ramenparados.com/wp-content/uploads/2019/06/ataque-a-los-titanes-3x18-5-1000x600.jpg',
      descripcion: 'Levi Ackerman'
    },
    { status: 200 }
  )
})

export default [
  products,
  newProduct
]