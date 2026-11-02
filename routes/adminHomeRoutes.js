const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminHomeController');
const uploadHome = require('../middlewares/uploadHome');

// ==========================================
// 1. HOME CLIENTS
// ==========================================
router.post('/clients', uploadHome.array('images', 20), controller.createClientsBulk);
router.get('/clients', controller.getAllClients);
router.get('/clients/:id', controller.getClientById);
router.put('/clients/:id', uploadHome.single('image'), controller.updateClient);

// ==========================================
// 2. HOME FAQS
// ==========================================
router.post('/faqs', controller.createFaqsBulk);
router.get('/faqs', controller.getAllFaqs);
router.get('/faqs/:id', controller.getFaqById);
router.put('/faqs/:id', controller.updateFaq);
router.delete('/faqs/:id', controller.deleteFaq);

module.exports = router;