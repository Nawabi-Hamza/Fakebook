const express = require("express")
const router = express.Router()
const { LoginUser, Register } = require("../controler/userControler")


router.get("/login", LoginUser)
router.post("/register",Register)





module.exports = router;