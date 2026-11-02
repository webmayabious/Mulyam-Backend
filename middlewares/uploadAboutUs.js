const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '../uploads/about');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // Preserves whatever extension is uploaded (.png, .jpg, .webp, .svg, etc.)
    const extension = path.extname(file.originalname).toLowerCase() || '.png';
    cb(null, `about-${uniqueSuffix}${extension}`);
  },
});

// Accepts any image MIME type (image/png, image/jpeg, image/svg+xml, image/webp, image/gif, etc.)
const fileFilter = (req, file, cb) => {
  if (file.mimetype && file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Uploaded file is not a valid image.'), false);
  }
};

const uploadAboutUs = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // increased to 10MB to accommodate high-res PNGs
  fileFilter,
});

module.exports = uploadAboutUs;