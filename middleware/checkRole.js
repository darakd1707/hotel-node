const checkRole = (allowedRole) => {
    return (req, res, next) => {
        const userRole = req.userData.role
        console.log(userRole)
        if(allowedRole.includes(userRole)){
            next()
        } else {
            return res.status(403).json({
                message : "akses ditolak",
                err: null,
            })
        }
    }
}
module.exports = {checkRole}