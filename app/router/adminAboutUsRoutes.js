const express = require('express');
const router = express.Router();
const controller = require('../controller/adminAboutUsController');
const uploadAbout = require('../miiddleware/uploadAboutUs');
const adminCheck = require("../miiddleware/admin_check")

// 1. About Us (Full CRUD)
router.post('/main', uploadAbout.array('images', 10),adminCheck, controller.createAboutUsBulk);
router.get('/main', controller.getAllAboutUs);
router.get('/main/:id',adminCheck, controller.getAboutUsById);
router.put('/main/:id', uploadAbout.single('image'),adminCheck, controller.updateAboutUs);
router.delete('/main/:id',adminCheck, controller.deleteAboutUs);

// 2. Mission & Vision (No create or delete)
router.get('/mission-vision', controller.getAllMissionVision);
router.get('/mission-vision/:id',adminCheck, controller.getMissionVisionById);
router.put('/mission-vision/:id', uploadAbout.single('image'),adminCheck, controller.updateMissionVision);

// 3. Team Intro (No create or delete)
router.get('/team-intro', controller.getAllTeamIntro);
router.get('/team-intro/:id',adminCheck, controller.getTeamIntroById);
router.put('/team-intro/:id',adminCheck, controller.updateTeamIntro);

// 4. Team Members (Bulk create, read, update with isActive - No delete)
router.post('/team', uploadAbout.array('images', 20),adminCheck, controller.createTeamBulk);
router.get('/team', controller.getAllTeamMembers);
router.get('/team/:id',adminCheck, controller.getTeamMemberById);
router.put('/team/:id', uploadAbout.single('image'),adminCheck, controller.updateTeamMember);

// 5. Our Ventures (Bulk create, read, update with isActive - No delete)
router.post('/ventures', uploadAbout.array('images', 20),adminCheck, controller.createVenturesBulk);
router.get('/ventures', controller.getAllVentures);
router.get('/ventures/:id',adminCheck, controller.getVentureById);
router.put('/ventures/:id', uploadAbout.single('image'),adminCheck, controller.updateVenture);

// router.get("/abouttest",(req,res)=>{
//     res.status(200).json({
//         message:"Hello Update"
//     })
// })


module.exports = router;