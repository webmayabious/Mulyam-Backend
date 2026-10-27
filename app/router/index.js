const express = require("express")
const router = express.Router()



router.use("/admin",require("../router/poperty.router.js"))












module.exports= router