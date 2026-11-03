const express = require("express");
const router = express.Router();

const propertyRouter = require("./poperty.router.js");
// poperty
router.use("/admin", propertyRouter);
// ADMIN
router.use("/admin",require("../router/admin.router.js"))
// contact US
router.use("/admin",require("../router/contactus.router.js"))

module.exports = router;