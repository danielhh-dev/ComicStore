let productos = [
  {
    id: 1,
    category: "comics",
    name: "Venom (2021) #9",
    price: 37,
    image:'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/62dab2a9a5cb7/clean.jpg'
  },
  {
    id: 2,
    category: "comics",
    name: "Strange (2022) #4",
    price: 25,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/b/b0/62dab2ca93e22/clean.jpg'
  },
  {
    id: 3,
    category: "comics",
    name: "Ant-Man (2022) #1",
    price: 30,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/62dab2eb45c66/clean.jpg'
  },
  {
    id: 4,
    category: "comics",
    name: "Avengers Vs. X-Men (2012) #9",
    price: 37,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/5/40/515f1c002c52b/clean.jpg'
  },
  {
    id: 5,
    category: "comics",
    name: "Star Wars: Obi-Wan (2022) #3",
    price: 39,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/62dab2c5ed491/clean.jpg'
  },
  {
    id: 6,
    category: "comics",
    name: "Hulk (2021) #6",
    price: 28,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/6/c0/6259cb69b3a83/clean.jpg'
  },  {
    id: 7,
    category: "comics",
    name: "Gambit (2022) #1",
    price: 37,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/f/10/62dab2cdb927d/clean.jpg'
  },
  {
    id: 8,
    category: "comics",
    name: "Genis-Vell: Captain Marvel (2022) #1",
    price: 27,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/1/00/62dab2d1ab2ca/clean.jpg'
  },
  {
    id: 9,
    category: "comics",
    name: "Wolverine: Patch (2022) #4",
    price: 34,
    image: 'https://i.annihil.us/u/prod/marvel/i/mg/b/d0/62dab2a96bb16/clean.jpg'
  },
  {
    id: 10,
    category: "mangas",
    name: "Attack on Titan #1",
    price: 15,
    image: 'https://images-na.ssl-images-amazon.com/images/I/91M9VaZWxOL.jpg'
  },
  {
    id: 11,
    category: "mangas",
    name: "DragonBall Super #14",
    price: 17,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81nKBuQzyjL.jpg'
  },
  {
    id: 12,
    category: "coleccionables",
    name: "Hot Toys 1:6 Spider-Man versión de traje casero",
    price: 34,
    image: 'https://m.media-amazon.com/images/I/6173BaMRQYL._AC_SL1000_.jpg'
  },
  {
    id: 13,
    category: "coleccionables",
    name: "Hot Toys Television Masterpiece Series Diecast: What If - Ultron Infinito Escala 1/6",
    price: 34,
    image: 'https://cdn.shopify.com/s/files/1/2437/4099/products/PNhxyAt4BGTIVoHDwUqCdTSl22U0Asl6MM01_532x781.jpg'
  },
];


export const getFetch = (id) => {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve( productos.find( prod => prod.id === parseInt(id)))
            } else {
                resolve(productos)                
            }
        }, 500)
    })
}

