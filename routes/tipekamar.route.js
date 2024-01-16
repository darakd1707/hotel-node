const express = require(`express`)
const app = express()
const tipeController = require(`../controllers/tipekamar.controller`)

app.use(express.json())

app.get("/", tipeController.getAllTipekamar)
app.post("/", tipeController.addTipekamar)
app.post("/find", tipeController.findTipekamar)
app.put("/:id", tipeController.updateTipekamar)
app.delete("/:id", tipeController.deleteTipe)

module.exports = app