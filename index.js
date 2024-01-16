const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})
app.get("/kamar", (req, res) => {
    let response = {
        message: "Kamar 1"
    }

    res.json(response)

})

app.post("/tipekamar", (req, res) => {
    let response = {
        message: "Tipe A"
    }

    res.json(response)

})

app.put("/pesan", (req, res) => {
    let response = {
        message: "Pesan 2 kamar"
    }

    res.json(response)

})

app.delete("/detail", (req, res) => {
    let response = {
        message: "2 single bed"
    }

    res.json(response)

})