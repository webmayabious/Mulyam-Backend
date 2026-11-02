const sequelize = require('../config/database');
const Blog = require('../models/blogModel')(sequelize);

// 1. Create a single blog
exports.createBlog = async (req, res) => {
  try {
    const {
      author,
      postDate,
      readingTime,
      title,
      heading,
      subHeading,
      blogType,
      description,
      isActive,
      isPopularPost,
      displayOnHomePage,
      category,
    } = req.body;

    if (!title || !description || !postDate) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, and postDate are required.',
      });
    }

    const imagePath = req.file ? `/uploads/blogs/${req.file.filename}` : null;

    const newBlog = await Blog.create({
      image: imagePath,
      author: author || null,
      postDate,
      readingTime: readingTime || null,
      title,
      heading: heading || null,
      subHeading: subHeading || null,
      blogType: blogType || null,
      description,
      isActive: isActive !== undefined ? isActive === 'true' || isActive === true : true,
      isPopularPost: isPopularPost !== undefined ? isPopularPost === 'true' || isPopularPost === true : false,
      displayOnHomePage: displayOnHomePage !== undefined ? displayOnHomePage === 'true' || displayOnHomePage === true : false,
      category: category || null,
    });

    return res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: newBlog,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 2. Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      order: [['post_date', 'DESC'], ['id', 'DESC']],
    });

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 3. Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 4. Update blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    const {
      author,
      postDate,
      readingTime,
      title,
      heading,
      subHeading,
      blogType,
      description,
      isActive,
      isPopularPost,
      displayOnHomePage,
      category,
    } = req.body;

    const imagePath = req.file ? `/uploads/blogs/${req.file.filename}` : blog.image;

    await blog.update({
      image: imagePath,
      author: author !== undefined ? author : blog.author,
      postDate: postDate !== undefined ? postDate : blog.postDate,
      readingTime: readingTime !== undefined ? readingTime : blog.readingTime,
      title: title !== undefined ? title : blog.title,
      heading: heading !== undefined ? heading : blog.heading,
      subHeading: subHeading !== undefined ? subHeading : blog.subHeading,
      blogType: blogType !== undefined ? blogType : blog.blogType,
      description: description !== undefined ? description : blog.description,
      isActive: isActive !== undefined ? isActive === 'true' || isActive === true : blog.isActive,
      isPopularPost: isPopularPost !== undefined ? isPopularPost === 'true' || isPopularPost === true : blog.isPopularPost,
      displayOnHomePage: displayOnHomePage !== undefined ? displayOnHomePage === 'true' || displayOnHomePage === true : blog.displayOnHomePage,
      category: category !== undefined ? category : blog.category,
    });

    return res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// 5. Delete blog by ID
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    await blog.destroy();

    return res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};