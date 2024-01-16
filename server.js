const express = require('express')
const app = express()
const cors = require(`cors`)
const PORT = 8000
const bodyParser = require(`body-parser`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const userRoute = require('./routes/user.route')
const kamarRoute = require('./routes/kamar.route')
const tipeRoute = require('./routes/tipekamar.route')
const pesanRoute = require('./routes/pemesanan.routes')

app.use('/user', userRoute)
app.use('/kamar', kamarRoute)
app.use('/tipekamar', tipeRoute)
app.use('/pemesanan', pesanRoute)

app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`Server of Hotel runs on port ${PORT}`)
})