const express = require("express")
const router = express.Router()
const { LoginUser, Register,Users } = require("../controler/userControler")
const { checkToken } = require("../jsonwebtoken")


router.post("/login", LoginUser)
router.post("/register", Register)
router.get("/user",checkToken,Users)




module.exports = router;