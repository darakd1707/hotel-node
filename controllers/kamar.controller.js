const kamarModel = require(`../models/index`).kamar
const Op = require(`sequelize`).Op

exports.getAllKamar = async (request, response) => {
    let kamar = await kamarModel.findAll()
    return response.json({
        success: true,
        data: kamar,
        message: `All rooms have been loaded`
    })
}

exports.findKamar = async (request, response) => {
    let keyword = request.body.keyword
    let kamar = await kamarModel.findAll({
        where: {
            [Op.or]: [
                { nomor_kamar: { [Op.substring]: keyword } },
            ]
        }
    })
    return response.json({
        success: true,
        data: kamar,
        message: `All rooms have been loaded`
    })
}

exports.addKamar = (request, response) => {
    let newKamar = {
        nomor_kamar: request.body.nomor_kamar,
        id_tipe_kamar: request.body.id_tipe_kamar
    }
    kamarModel.create(newKamar)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New room has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.updateKamar = (request, response) => {
    let datakamar = {
        nomor_kamar: request.body.nomor_kamar,
        id_tipe_kamar: request.body.idtipe
    }
    let idkamar = request.params.id
    kamarModel.update(datakamar, { where: { id: idkamar } })
        .then(result => {
            return response.json({
                success: true,
                message: `Room data has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })

}

exports.deleteKamar = (request, response) => {
    let idkamar = request.params.id
    kamarModel.destroy({ where: { id: idkamar } })
        .then(result => {
            return response.json({
                success: true,
                message: `Room data has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}