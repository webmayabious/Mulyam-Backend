const express = require('express');
const router = express.Router();
const controller = require('../controller/adminHomeController');
const uploadHome = require('../miiddleware/uploadHome');
const adminCheck = require("../miiddleware/admin_check")

// ==========================================
// 1. HOME CLIENTS
// ==========================================
router.post('/clients', uploadHome.array('images', 20),adminCheck, controller.createClientsBulk);
router.get('/clients', controller.getAllClients);
router.get('/clients/:id',adminCheck, controller.getClientById);
router.put('/clients/:id', uploadHome.single('image'),adminCheck, controller.updateClient);

// ==========================================
// 2. HOME FAQS
// ==========================================
router.post('/faqs',adminCheck, controller.createFaqsBulk);
router.get('/faqs', controller.getAllFaqs);
router.get('/faqs/:id',adminCheck, controller.getFaqById);
router.put('/faqs/:id',adminCheck, controller.updateFaq);
router.delete('/faqs/:id',adminCheck, controller.deleteFaq);


module.exports = router;