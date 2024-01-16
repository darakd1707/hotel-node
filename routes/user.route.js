const express = require(`express`)
const app = express()
const userController = require(`../controllers/user.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')
const body = require ('body-parser')

app.use(express.json())

app.get("/getAll", auth.authVerify, checkRole(["admin","resepsionis"]), userController.getAllUser)
app.get("/findOne/:id", auth.authVerify, checkRole(["admin", "resepsionis"]),userController.findUser)
app.post("/login", userController.login)
app.post("/", checkRole(["admin"]), userController.addUser)
app.delete("/:id", auth.authVerify, checkRole(["admin"]), userController.deleteUser)
app.put("/:id", userController.updateUser)
app.get("/findAllCustomer", userController.findAllCustomer)
app.get("/findAllExcCustomer", userController.findAllExcCustomer)
app.post("/RegisterCustomer", userController.RegisterCustomer)
app.post("/RegisterLoginCustomer", userController.LoginRegister)
app.get("/getUserCount", userController.getUserLength)


module.exports = app