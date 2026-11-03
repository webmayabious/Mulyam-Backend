const express = require('express');
const router = express.Router();
const controller = require('../controller/adminServicesController');
const uploadService = require('../miiddleware/uploadService');
const adminCheck = require("../miiddleware/admin_check")

// ==========================================
// 1. MAIN SERVICES (Images + Rich Text Lists)
// ==========================================
router.post('/main', uploadService.array('images', 10),adminCheck, controller.createMainItemsBulk);
router.get('/main', controller.getAllMainItems);
router.get('/main/:id',adminCheck, controller.getMainItemById);
router.put('/main/:id', uploadService.single('image'),adminCheck, controller.updateMainItem);
router.delete('/main/:id',adminCheck, controller.deleteMainItem);

// ==========================================
// 2. SECONDARY SERVICES (Headings, Subheadings, Descriptions)
// ==========================================
router.post('/secondary',adminCheck, controller.createSecondaryItemsBulk);
router.get('/secondary', controller.getAllSecondaryItems);
router.get('/secondary/:id',adminCheck, controller.getSecondaryItemById);
router.put('/secondary/:id',adminCheck, controller.updateSecondaryItem);
router.delete('/secondary/:id',adminCheck, controller.deleteSecondaryItem);



module.exports = router;