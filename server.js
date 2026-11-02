/**
 * Root Application Server
 *
 * Bootstraps the Express application, registers core middleware,
 * configures static asset serving, synchronizes Sequelize database models,
 * and mounts all administrative route modules (Home, Services, About Us, and Blogs).
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Database connection instance
const sequelize = require('./config/database');

// Import model definitions and register schemas
require('./models/HomeModel')(sequelize);
require('./models/servicesModel')(sequelize);
require('./models/aboutUsModel')(sequelize);
require('./models/blogModel')(sequelize);

// Import application route modules
const adminHomeRoutes = require('./routes/adminHomeRoutes');
const adminServicesRoutes = require('./routes/adminServicesRoutes');
const adminAboutUsRoutes = require('./routes/adminAboutUsRoutes');
const adminBlogRoutes = require('./routes/adminBlogRoutes');

const app = express();

// =============================================================================
// GLOBAL MIDDLEWARE
// =============================================================================

// Cross-Origin Resource Sharing
app.use(cors());

// Body parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// =============================================================================
// STATIC ASSETS CONFIGURATION
// =============================================================================

// Ensure physical upload directories exist on disk
const uploadsDir = path.join(__dirname, 'uploads');
const homeUploadsDir = path.join(__dirname, 'uploads/home');
const servicesUploadsDir = path.join(__dirname, 'uploads/services');
const aboutUploadsDir = path.join(__dirname, 'uploads/about');
const blogsUploadsDir = path.join(__dirname, 'uploads/blogs');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
if (!fs.existsSync(homeUploadsDir)) {
  fs.mkdirSync(homeUploadsDir, { recursive: true });
}
if (!fs.existsSync(servicesUploadsDir)) {
  fs.mkdirSync(servicesUploadsDir, { recursive: true });
}
if (!fs.existsSync(aboutUploadsDir)) {
  fs.mkdirSync(aboutUploadsDir, { recursive: true });
}
if (!fs.existsSync(blogsUploadsDir)) {
  fs.mkdirSync(blogsUploadsDir, { recursive: true });
}

// Expose public static file serving endpoints
// Accessible via: http://localhost:5000/uploads/...
app.use('/uploads', express.static(uploadsDir));

// =============================================================================
// API ROUTE MOUNTING
// =============================================================================

// Base endpoints for Admin Home modules (home_clients, home_faqs)
app.use('/api/v1/admin/home', adminHomeRoutes);

// Base endpoints for Admin Services modules (service_main_items, service_secondary_items)
app.use('/api/v1/admin/services', adminServicesRoutes);

// Base endpoints for Admin About Us modules (aboutus, about_mission_vision, about_team_intros, about_teams, about_our_ventures)
app.use('/api/v1/admin/about', adminAboutUsRoutes);

// Base endpoints for Admin Blog module (blogs)
app.use('/api/v1/admin/blogs', adminBlogRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Handle unknown API route requests (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`,
  });
});

// =============================================================================
// APPLICATION BOOTSTRAPPER
// =============================================================================

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Authenticate database connectivity
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Synchronize defined models with the MySQL schema
    // alter: true updates table columns safely without dropping existing tables
    await sequelize.sync({ alter: true });
    console.log('Database models synchronized successfully.');

    // Start Express HTTP listener
    app.listen(PORT, () => {
      console.log(`Server actively running on http://localhost:${PORT}`);
      console.log(`Static uploads available at http://localhost:${PORT}/uploads/`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();