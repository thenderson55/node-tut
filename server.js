const express = require("express")
const path = require("path")

const server = express()

server.get("/",(req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/index.html"))
})

server.get("/about",(req, res) => {
  res.status(200).send("About Page")
})

server.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>")
})

server.listen(4000, () => {
  console.log('Server is listening on port 4000..');
})