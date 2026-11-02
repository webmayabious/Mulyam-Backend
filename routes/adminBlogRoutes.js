const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminBlogController');
const uploadBlog = require('../middlewares/uploadBlog');

// Create single blog (Accepts multipart/form-data with a single 'image' field)
router.post('/', uploadBlog.single('image'), controller.createBlog);

// Retrieve all blogs
router.get('/', controller.getAllBlogs);

// Retrieve a single blog by ID
router.get('/:id', controller.getBlogById);

// Update a blog by ID (Supports optional single image replacement)
router.put('/:id', uploadBlog.single('image'), controller.updateBlog);

// Delete a blog by ID
router.delete('/:id', controller.deleteBlog);

module.exports = router;