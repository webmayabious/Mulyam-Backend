
require("dotenv").config()
const cors = require("cors");
const express = require("express")
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use("/api/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const chalk = require("chalk");

const database = require("./app/config/db")
require("./app/model/index")

const router = require("./app/router/index")
app.use("/api",router)




const port = process.env.PORT

app.listen(port,()=>{
    console.log(chalk.green(`🚀 Server Running At ${port}`))
})

// ******************************abir**********************************************
// // Database connection instance
const sequelize = require('./app/config/db');

// // Import model definitions and register schemas
require('./app/model/HomeModel')(sequelize);
require('./app/model/servicesModel')(sequelize);
require('./app/model/aboutUsModel')(sequelize);
require('./app/model/blogModel')(sequelize);

// // Import application route modules
const adminHomeRoutes = require('./app/router/adminHomeRoutes');
const adminServicesRoutes = require('./app/router/adminServicesRoutes');
const adminAboutUsRoutes = require('./app/router/adminAboutUsRoutes');
const adminBlogRoutes = require('./app/router/adminBlogRoutes');

// // =============================================================================
// // GLOBAL MIDDLEWARE
// // =============================================================================

// // Cross-Origin Resource Sharing
// app.use(cors());

// // Body parsers
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// // =============================================================================
// // STATIC ASSETS CONFIGURATION
// // =============================================================================

// // Ensure physical upload directories exist on disk
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

app.use('/uploads', express.static(uploadsDir));

// // =============================================================================
// // API ROUTE MOUNTING
// // =============================================================================

// Base endpoints for Admin Home modules (home_clients, home_faqs)
app.use('/api/v1/admin/home', adminHomeRoutes);

// Base endpoints for Admin Services modules (service_main_items, service_secondary_items)
app.use('/api/v1/admin/services', adminServicesRoutes);

// Base endpoints for Admin About Us modules (aboutus, about_mission_vision, about_team_intros, about_teams, about_our_ventures)
app.use('/api/v1/admin/about', adminAboutUsRoutes);

// Base endpoints for Admin Blog module (blogs)
app.use('/api/v1/admin/blogs', adminBlogRoutes);
