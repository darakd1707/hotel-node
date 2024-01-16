const express = require(`express`)
const app = express()
const pesanController = require(`../controllers/pemesanan.controller`)

app.use(express.json())

app.get("/", pesanController.getAllPesan)
app.post("/", pesanController.addPesan)
app.post("/find", pesanController.findPesan)
app.put("/:id", pesanController.updatePesan)
app.delete("/:id", pesanController.deletePesan)

module.exports = app