const express = require("express")
const path = require("path")
const { products } = require('./data')

const server = express()

// server.use(express.static("./public"))

// server.get("/",(req, res) => {
//   res.sendFile(path.resolve(__dirname, "./src/index.html"))
// })

server.get("/",(req, res) => {
  res.send('<h1>Home</h1><a href="/api/products">Products</>' )
})

server.get("/api/products",(req, res) => {
  const produstsWithoutDescription = products.map(item => {
    const {id, name, image} = item
    return {id,name,image}
  })
  res.json(produstsWithoutDescription)
})

server.get("/api/products/:productID",(req, res) => {
  const { productID } = req.params 
  const singleProduct = products.find(item => item.id === Number(productID))
  singleProduct ? res.json(singleProduct) : res.send("Product does not exist")
})

server.get("/about",(req, res) => {
  res.status(200).send("About Page")
})

// server.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource not found</h1>")
// })

server.listen(4000, () => {
  console.log('Server is listening on port 4000..');
})