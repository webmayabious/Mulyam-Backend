const express = require('express');
const router = express.Router();
const controller = require('../controller/adminBlogController');
const uploadBlog = require('../miiddleware/uploadBlog');
const adminCheck = require("../miiddleware/admin_check")

// Create single blog (Accepts multipart/form-data with a single 'image' field)
router.post('/', uploadBlog.single('image'),adminCheck, controller.createBlog);

// Retrieve all blogs
router.get('/', controller.getAllBlogs);

// Retrieve a single blog by ID
router.get('/:id',adminCheck, controller.getBlogById);

// Update a blog by ID (Supports optional single image replacement)
router.put('/:id', uploadBlog.single('image'),adminCheck, controller.updateBlog);

// Delete a blog by ID
router.delete('/:id',adminCheck, controller.deleteBlog);

module.exports = router;