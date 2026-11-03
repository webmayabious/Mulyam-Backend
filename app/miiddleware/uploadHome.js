const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Dedicated target directory for Home uploads
const uploadDir = path.join(__dirname, '../../uploads');

// Create the directory if it does not exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage engine configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `home-${uniqueSuffix}${ext}`);
  },
});

// Image filter (accepts all standard image mime types)
const fileFilter = (req, file, cb) => {
  if (file.mimetype && file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const uploadHome = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB max size
  fileFilter,
});

module.exports = uploadHome;