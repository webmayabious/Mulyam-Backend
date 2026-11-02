const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminServicesController');
const uploadService = require('../middlewares/uploadService');

// ==========================================
// 1. MAIN SERVICES (Images + Rich Text Lists)
// ==========================================
router.post('/main', uploadService.array('images', 10), controller.createMainItemsBulk);
router.get('/main', controller.getAllMainItems);
router.get('/main/:id', controller.getMainItemById);
router.put('/main/:id', uploadService.single('image'), controller.updateMainItem);
router.delete('/main/:id', controller.deleteMainItem);

// ==========================================
// 2. SECONDARY SERVICES (Headings, Subheadings, Descriptions)
// ==========================================
router.post('/secondary', controller.createSecondaryItemsBulk);
router.get('/secondary', controller.getAllSecondaryItems);
router.get('/secondary/:id', controller.getSecondaryItemById);
router.put('/secondary/:id', controller.updateSecondaryItem);
router.delete('/secondary/:id', controller.deleteSecondaryItem);

module.exports = router;