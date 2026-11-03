const express = require("express");
const router = express.Router();

const {
  createContactUS,
  getAllContactUS,
  getSingleContactUS,
  updateContactUS,
  deleteContactUS,

  createGetInTouch,
  getAllGetInTouch,
  getSingleGetInTouch,
  updateGetInTouch,
  deleteGetInTouch,
} = require("../controller/contactus.con");

const upload = require("../miiddleware/image_contactus");
const adminCheck = require("../miiddleware/admin_check")

// CONTACT

router.post("/contactus", upload.single("image"),adminCheck, createContactUS);

router.get("/contactus", getAllContactUS);

router.get("/contactus/:id",adminCheck, getSingleContactUS);

router.put("/contactus/:id", upload.single("image"),adminCheck, updateContactUS);

router.delete("/contactus/:id",adminCheck, deleteContactUS);

// GET IN TOUCH
router.post("/getintouch", upload.array("image", 20),adminCheck, createGetInTouch);

router.get("/getintouch", getAllGetInTouch);

router.get("/getintouch/:id",adminCheck, getSingleGetInTouch);

router.put("/getintouch/:id", upload.single("image"),adminCheck ,updateGetInTouch);

router.delete("/getintouch/:id",adminCheck, deleteGetInTouch);

module.exports = router;
