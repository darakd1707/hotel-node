const detailModel = require(`../models/index`).detail_pemesanan
const Op = require(`sequelize`).Op

exports.getAllDetail = async (request, response) => {
    let detail = await detailModel.findAll()
    return response.json({
        success: true,
        data: detail,
        message: `All details have been loaded`
    })
}

exports.findDetail = async (request, response) => {
    let keyword = request.body.keyword
    let detail = await detailModel.findAll({
        where: {
            [Op.or]: [
                { tgl_akses: { [Op.substring]: keyword } },
            ]
        }
    })
    return response.json({
        success: true,
        data: detail,
        message: `All orders have been loaded`
    })
}

exports.addDetail = (request, response) => {
    let newDetail = {
        id_pemesanan: request.body.id_pemesanan,
        id_kamar: request.body.id_kamar,
        tgl_akses: request.body.tgl_akses,
        harga: request.body.harga
    }
    detailModel.create(newDetail)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New detail has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.updateDetail = (request, response) => {
    let dataDetail = {
        id_pemesanan: request.body.id_pemesanan,
        id_kamar: request.body.id_kamar,
        tgl_akses: request.body.tgl_akses,
        harga: request.body.harga
    }
    let iddetail = request.params.id
    detailModel.update(datakamar, { where: { id: iddetail } })
        .then(result => {
            return response.json({
                success: true,
                message: `Detail data has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })

}

exports.deleteDetail = (request, response) => {
    let iddetail = request.params.id
    detailModel.destroy({ where: { id: iddetail } })
        .then(result => {
            return response.json({
                success: true,
                message: `Detail data has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}