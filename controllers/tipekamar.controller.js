const tipekamarModel = require(`../models/index`).tipe_kamar
const Op = require(`sequelize`).Op
const path = require(`path`)
const fs = require(`fs`)
const upload = require('./upload-foto').single(`foto`)

exports.addTipekamar = (request, response) => {
    upload(request, response, async error => {
        if (error) {
            return response.json({ message: error })
        }
        if (!request.file) {
            return response.json({ message: `Nothing to upload` })
        }

        let newTipeKamar = {
            nama_tipe_kamar: request.body.nama_tipe_kamar,
            harga: request.body.harga,
            deskripsi: request.body.deskripsi,
            foto: request.file.filename
        }
        tipekamarModel.create(newTipeKamar)
            .then(result => {
                return response.json({
                    success: true,
                    data: result,
                    message: `New room type has been inserted`
                })
            })
            .catch(error => {
                return response.json({
                    succes: false,
                    message: error.message
                })
            })
    })
}

exports.updateTipekamar = (request, response) => {
    upload(request, response, async error => {
        if (error) {
            return response.json({ message: error })
        }
        let idtipe = request.params.id
        let datatipe = {
            nama_tipe_kamar: request.body.nama_tipe_kamar,
            harga: request.body.harga,
            deskripsi: request.body.deskripsi,
            foto: request.file.filename
        }
        if (request.file) {
            const selectedTipe = await tipekamarModel.findOne({
                where: { id: id }
            })
            const oldFoto = selectedUser.foto
            const pathFoto = path.join(__dirname, `../foto`, oldFoto)
            if (fs.existsSync(pathFoto)) {
                fs.unlink(pathFoto, error => console.log(error))
            }
            tipekamarModel.foto = request.file.filename
        }
        tipekamarModel.update(datatipe, { where: { id: iduser } })
            .then(result => {
                return response.json({
                    success: true,
                    message: `Room type data has been updated`
                })
            })
            .catch(error => {
                return response.json({
                    success: false,
                    message: error.message
                })
            })

    })
}

exports.getAllTipekamar = async (request, response) => { 
    let tipe_kamar = await userModel.findAll()
    if (tipe_kamar.length === 0) {
        return response.status(400).json({
            success: false,
            message: "no type to show",
        });
    }
    return response.json({
        success: true,
        data: tipe_kamar,
        message: `All room types have been loaded`
    })
}

exports.findTipekamar = async (request, response) => {
    let keyword = request.body.keyword
    let tipe_kamar = await userModel.findAll({
        where: {
            [Op.or]: [
                { nama_tipe_kamar: { [Op.substring]: keyword } }
                        ]
        }
    })
    return response.json({
        success: true,
        data: tipe_kamar,
        message: `All room types have been loaded`
    })
}

exports.deleteTipe = (request, response) => {
    let idtipe = request.params.id
    tipekamarModel.destroy({ where: { id: idtipe } })
        .then(result => {
            return response.json({
                success: true,
                message: `Room type data has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}