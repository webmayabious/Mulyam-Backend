const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminAboutUsController');
const uploadAbout = require('../middlewares/uploadAboutUs');

// 1. About Us (Full CRUD)
router.post('/main', uploadAbout.array('images', 10), controller.createAboutUsBulk);
router.get('/main', controller.getAllAboutUs);
router.get('/main/:id', controller.getAboutUsById);
router.put('/main/:id', uploadAbout.single('image'), controller.updateAboutUs);
router.delete('/main/:id', controller.deleteAboutUs);

// 2. Mission & Vision (No create or delete)
router.get('/mission-vision', controller.getAllMissionVision);
router.get('/mission-vision/:id', controller.getMissionVisionById);
router.put('/mission-vision/:id', uploadAbout.single('image'), controller.updateMissionVision);

// 3. Team Intro (No create or delete)
router.get('/team-intro', controller.getAllTeamIntro);
router.get('/team-intro/:id', controller.getTeamIntroById);
router.put('/team-intro/:id', controller.updateTeamIntro);

// 4. Team Members (Bulk create, read, update with isActive - No delete)
router.post('/team', uploadAbout.array('images', 20), controller.createTeamBulk);
router.get('/team', controller.getAllTeamMembers);
router.get('/team/:id', controller.getTeamMemberById);
router.put('/team/:id', uploadAbout.single('image'), controller.updateTeamMember);

// 5. Our Ventures (Bulk create, read, update with isActive - No delete)
router.post('/ventures', uploadAbout.array('images', 20), controller.createVenturesBulk);
router.get('/ventures', controller.getAllVentures);
router.get('/ventures/:id', controller.getVentureById);
router.put('/ventures/:id', uploadAbout.single('image'), controller.updateVenture);

module.exports = router;