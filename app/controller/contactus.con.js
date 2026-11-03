
const { contactUS, getInTouch } = require("../model/contactus.model");
const fs = require("fs");
const path = require("path");
const { Model } = require("sequelize");

// CONTACT US

const createContactUS = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).json({
        status: false,
        message: "Title is required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        status: false,
        message: "Image is required",
      });
    }

    const data = await contactUS.create({
      title,
      description,
      image: req.file.filename,
    });

    return res.status(201).json({
      status: true,
      message: "Contact us created successfully",
      data,
    });
  } catch (error) {
    console.log("Controller Error:", error);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


// GET ALL 
const getAllContactUS = async (req, res) => {
  try {
    const data = await contactUS.findAll({
      order: [["id", "DESC"]],
      include:[{
        model:getInTouch,
      }]
    });

    return res.status(200).json({
      status: true,
      message: "Contact us fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// GET SINGLE 
const getSingleContactUS = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await contactUS.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Contact us not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Contact us fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// UPDATE 
const updateContactUS = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const data = await contactUS.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Contact us not found",
      });
    }

    await data.update({
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(req.file && { image: req.file.filename }),
    });

    return res.status(200).json({
      status: true,
      message: "Contact us updated successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// DELETE 
const deleteContactUS = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await contactUS.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Contact us not found",
      });
    }

    // Delete image from uploads folder
    if (data.image) {
      const imagePath = path.join(
        process.cwd(),
        "uploads",
        data.image
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Delete database record
    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Contact us and image deleted successfully",
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};



// GET IN TOUCH

// CREATE
const createGetInTouch = async (req, res) => {
  try {
    let {
      contactus_id,
      city,
      address,
      contact,
      email,
      status,
    } = req.body;

    if (!contactus_id) {
      return res.status(400).json({
        status: false,
        message: "contactus_id is required",
      });
    }

    // Convert values into arrays
    const toArray = (value) =>
      Array.isArray(value) ? value : [value];

    city = toArray(city);
    address = toArray(address);
    contact = toArray(contact);
    email = toArray(email);
    status = toArray(status);

    if (!city.length || city.some((item) => !item)) {
      return res.status(400).json({
        status: false,
        message: "City is required",
      });
    }

    const files = req.files || [];

    // Create separate database records
    const records = city.map((item, index) => ({
      contactus_id,
      city: String(item),
      address: address[index] || null,
      contact: contact[index] || null,
      email: email[index] || null,
      image: files[index] ? files[index].filename : null,
      status: status[index] || "1",
    }));

    const data = await getInTouch.bulkCreate(records);

    return res.status(201).json({
      status: true,
      message: "Get in touch records created successfully",
      data,
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


// GET ALL 
const getAllGetInTouch = async (req, res) => {
  try {
    const data = await getInTouch.findAll({
      order: [["id", "DESC"]],
    });

    return res.status(200).json({
      status: true,
      message: "Get in touch records fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// GET SINGLE 
const getSingleGetInTouch = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await getInTouch.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Get in touch record not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Get in touch record fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateGetInTouch = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      contactus_id,
      city,
      address,
      contact,
      email,
      status,
    } = req.body;

    const data = await getInTouch.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Get in touch record not found",
      });
    }

    let newImage = data.image;

    // If new image uploaded
    if (req.file) {
      // Delete old image
      if (data.image) {
        const oldImagePath = path.join(
          process.cwd(),
          "uploads",
          data.image
        );

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      newImage = req.file.filename;
    }

    await data.update({
      ...(contactus_id !== undefined && { contactus_id }),
      ...(city !== undefined && { city }),
      ...(address !== undefined && { address }),
      ...(contact !== undefined && { contact }),
      ...(email !== undefined && { email }),
      ...(status !== undefined && { status }),
      image: newImage,
    });

    return res.status(200).json({
      status: true,
      message: "Get in touch record updated successfully",
      data,
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


// DELETE 
const deleteGetInTouch = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await getInTouch.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Get in touch record not found",
      });
    }

    // Delete image from uploads folder
    if (data.image) {
      const imagePath = path.join(
        process.cwd(),
        "uploads",
        data.image
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Delete database record
    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Get in touch record and image deleted successfully",
    });

  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


module.exports = {
  createContactUS,
  getAllContactUS,
  getSingleContactUS,
  updateContactUS,
  deleteContactUS,

  createGetInTouch,
  getAllGetInTouch,
  getSingleGetInTouch,
  updateGetInTouch,
  deleteGetInTouch,
};
