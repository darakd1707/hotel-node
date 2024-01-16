const pesanModel = require(`../models/index`).pemesanan
const Op = require(`sequelize`).Op

exports.getAllPesan = async (request, response) => {
    let pesan = await pesanModel.findAll()
    return response.json({
        success: true,
        data: pesan,
        message: `All orders have been loaded`
    })
}

exports.findPesan = async (request, response) => {
    let keyword = request.body.keyword
    let pesan = await pesanModel.findAll({
        where: {
            [Op.or]: [
                { nomor_pemesanan: { [Op.substring]: keyword } },
                { nama_pemesan: { [Op.substring]: keyword } },
                { tgl_pemesanan: { [Op.substring]: keyword } },
                { tgl_check_in: { [Op.substring]: keyword } },
                { tgl_check_out: { [Op.substring]: keyword } },
                { nama_tamu: { [Op.substring]: keyword } },
                { status_pemesanan: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: pesan,
        message: `All orders have been loaded`
    })
}

exports.addPesan = (request, response) => {
    let newPesan = {
        nomor_pemesanan : request.body.nomor,
        nama_pemesan : request.body.nama_pemesan,
        email_pemesan : request.body.email_pemesan,
        tgl_pemesanan : request.body.tgl_pemesanan,
        tgl_check_in : request.body.tgl_check_in,
        tgl_check_out : request.body.tgl_check_out,
        nama_tamu : request.body.nama_tamu,
        jumlah_kamar : request.body.jumlah_kamar,
        id_tipe_kamar : request.body.id_tipe_kamar,
        status_pemesanan : request.body.status_pemesanan,
        id_user : request.body.id_user,
    }
    pesanModel.create(newPesan)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New order has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                succes: false,
                message: error.message
            })
        })
}

exports.updatePesan = (request, response) => {
    let pesan = {
        nnomor_pemesanan : request.body.nomor,
        nama_pemesan : request.body.nama_pemesan,
        email_pemesan : request.body.email_pemesan,
        tgl_pemesanan : request.body.tgl_pemesanan,
        tgl_check_in : request.body.tgl_check_in,
        tgl_check_out : request.body.tgl_check_out,
        nama_tamu : request.body.nama_tamu,
        jumlah_kamar : request.body.jumlah_kamar,
        id_tipe_kamar : request.body.id_tipe_kamar,
        status_pemesanan : request.body.status_pemesanan,
        id_user : request.body.id_user,
    }
    let idpesan = request.params.id
    pesanModel.update(datakamar, { where: { id: idpesan } })
        .then(result => {
            return response.json({
                success: true,
                message: `Order data has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })

}

exports.deletePesan = (request, response) => {
    let idpesan = request.params.id
    pesanModel.destroy({ where: { id: idpesan } })
        .then(result => {
            return response.json({
                success: true,
                message: `Order data has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}