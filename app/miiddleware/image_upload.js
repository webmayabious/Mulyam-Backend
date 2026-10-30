const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {

    // Image fields
    const imageFields = [
        "poperty_image",
        "floor_image",
        "master_image"
    ];

    // Allow images for image fields
    if (imageFields.includes(file.fieldname)) {
        const allowedImages = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp"
        ];

        if (allowedImages.includes(file.mimetype)) {
            return cb(null, true);
        }

        return cb(new Error("Only JPG, PNG, GIF, and WEBP images are allowed"), false);
    }

    // Allow PDF for brochure*********************************
    // if (file.fieldname === "brochure_file") {
    //     const allowedBrochureTypes = [
    //         "application/pdf"
    //     ];

    //     if (allowedBrochureTypes.includes(file.mimetype)) {
    //         return cb(null, true);
    //     }

    //     return cb(new Error("Only PDF files are allowed for brochures"), false);
    // }

    // cb(new Error("Unexpected file field"), false);
    // Allow PDF, PowerPoint, Word, and common document formats
    // *******************************************************
if (file.fieldname === "brochure_file") {
    const allowedBrochureTypes = [
        // Adobe PDF
        "application/pdf",
        
        // Microsoft PowerPoint & OpenOffice Templates
        "application/vnd.ms-powerpoint", 
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        
        // Microsoft Word (highly common for fallback document formats)
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        
        // Web / Plain Text formats
        "text/plain",
        "text/html"
    ];

    if (allowedBrochureTypes.includes(file.mimetype)) {
        return cb(null, true);
    }

    return cb(new Error("Invalid file format. Only PDF, PowerPoint, Word, and text documents are allowed for brochures."), false);
}
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB per file
    }
});


module.exports = upload ;