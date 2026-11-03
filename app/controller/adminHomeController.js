
const sequelize = require('../config/db');
const { HomeClient, HomeFaq } = require('../model/HomeModel')(sequelize);

// =============================================================================
// CLIENT MODULE CONTROLLERS (home_clients)
// =============================================================================

/**
 * Bulk create client entities with individual image associations.
 *
 * @route   POST /api/v1/admin/home/clients
 * @access  Private/Admin
 * @desc    Accepts a multipart payload containing:
 *          - `images`: Binary file stream array handled by Multer.
 *          - `clientsData`: Serialized JSON array of metadata objects.
 *          Enforces a strict 1:1 index alignment between uploaded files and objects.
 */
exports.createClientsBulk = async (req, res) => {
  try {
    const files = req.files;

    // Validate that file streams were processed by upstream upload middleware
    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No images uploaded. Each client record requires 1 image file under the "images" field.',
      });
    }

    // Ensure the structured metadata payload exists
    if (!req.body.clientsData) {
      return res.status(400).json({
        success: false,
        message: 'Missing "clientsData" field containing JSON string array of client objects.',
      });
    }

    // Parse serialized JSON payload into a JavaScript array
    let parsedClients;
    try {
      parsedClients = typeof req.body.clientsData === 'string'
        ? JSON.parse(req.body.clientsData)
        : req.body.clientsData;
    } catch (parseError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON format in "clientsData".',
      });
    }

    if (!Array.isArray(parsedClients)) {
      return res.status(400).json({
        success: false,
        message: '"clientsData" must be a valid array of client objects.',
      });
    }

    // Validate 1:1 cardinality between uploaded binaries and metadata records
    if (parsedClients.length !== files.length) {
      return res.status(400).json({
        success: false,
        message: `Cardinality mismatch: Received ${parsedClients.length} client data rows and ${files.length} image files. Each row requires exactly 1 image.`,
      });
    }

    // Validate required fields and map database insert entities
    const recordsToInsert = [];
    for (let index = 0; index < parsedClients.length; index++) {
      const record = parsedClients[index];

      if (!record.heading || !record.description) {
        return res.status(400).json({
          success: false,
          message: `Validation error at index ${index}: 'heading' and 'description' are mandatory.`,
        });
      }

      recordsToInsert.push({
        imageUrl: `/uploads/${files[index].filename}`,
        heading: record.heading,
        description: record.description,
        isActive: record.isActive !== undefined ? Boolean(record.isActive) : true,
      });
    }

    // Execute batch insert operation via Sequelize
    const createdClients = await HomeClient.bulkCreate(recordsToInsert);

    return res.status(201).json({
      success: true,
      message: `${createdClients.length} client records created successfully`,
      data: createdClients,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while creating client records in bulk.',
      error: error.message,
    });
  }
};

/**
 * Retrieve all client records in sequential primary key order.
 *
 * @route   GET /api/v1/admin/home/clients
 * @access  Private/Admin
 */
exports.getAllClients = async (req, res) => {
  try {
    const clients = await HomeClient.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      success: true,
      count: clients.length,
      data: clients,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while retrieving client records.',
      error: error.message,
    });
  }
};

/**
 * Retrieve a single client record by its primary key identifier.
 *
 * @route   GET /api/v1/admin/home/clients/:id
 * @access  Private/Admin
 */
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await HomeClient.findByPk(id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: `Client record with identifier ${id} was not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while retrieving the client record.',
      error: error.message,
    });
  }
};

/**
 * Update attributes of an existing client record with optional file replacement.
 *
 * @route   PUT /api/v1/admin/home/clients/:id
 * @access  Private/Admin
 */
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await HomeClient.findByPk(id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: `Client record with identifier ${id} was not found.`,
      });
    }

    const { heading, description, isActive } = req.body;

    // Use newly uploaded file path if present, otherwise preserve existing asset path
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : client.imageUrl;

    await client.update({
      imageUrl,
      heading: heading ?? client.heading,
      description: description ?? client.description,
      isActive: isActive !== undefined 
        ? (isActive === 'true' || isActive === true) 
        : client.isActive,
    });

    return res.status(200).json({
      success: true,
      message: 'Client record updated successfully',
      data: client,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while updating the client record.',
      error: error.message,
    });
  }
};

// =============================================================================
// FAQ MODULE CONTROLLERS (home_faqs)
// =============================================================================

/**
 * Bulk create FAQ entities using standard JSON input.
 *
 * @route   POST /api/v1/admin/home/faqs
 * @access  Private/Admin
 * @desc    Accepts either a JSON array or a wrapped object `{ faqs: [...] }`.
 */
exports.createFaqsBulk = async (req, res) => {
  try {
    const payload = req.body;

    // Normalize incoming payload structure to an array
    const faqsArray = Array.isArray(payload) ? payload : (payload.faqs || [payload]);

    if (!faqsArray || faqsArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'A non-empty array of FAQ objects is required.',
      });
    }

    // Validate structural integrity of each FAQ record
    for (let index = 0; index < faqsArray.length; index++) {
      const item = faqsArray[index];
      if (!item.question || !item.answer) {
        return res.status(400).json({
          success: false,
          message: `Validation error at index ${index}: 'question' and 'answer' are mandatory.`,
        });
      }
    }

    // Execute bulk insert operation
    const createdFaqs = await HomeFaq.bulkCreate(faqsArray);

    return res.status(201).json({
      success: true,
      message: `${createdFaqs.length} FAQs created successfully`,
      data: createdFaqs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while creating FAQs in bulk.',
      error: error.message,
    });
  }
};

/**
 * Retrieve all FAQ records in sequential primary key order.
 *
 * @route   GET /api/v1/admin/home/faqs
 * @access  Private/Admin
 */
exports.getAllFaqs = async (req, res) => {
  try {
    const faqs = await HomeFaq.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      success: true,
      count: faqs.length,
      data: faqs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while retrieving FAQ records.',
      error: error.message,
    });
  }
};

/**
 * Retrieve a single FAQ record by its primary key identifier.
 *
 * @route   GET /api/v1/admin/home/faqs/:id
 * @access  Private/Admin
 */
exports.getFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await HomeFaq.findByPk(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: `FAQ record with identifier ${id} was not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: faq,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while retrieving the FAQ record.',
      error: error.message,
    });
  }
};

/**
 * Update the question or answer of an existing FAQ record.
 *
 * @route   PUT /api/v1/admin/home/faqs/:id
 * @access  Private/Admin
 */
exports.updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await HomeFaq.findByPk(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: `FAQ record with identifier ${id} was not found.`,
      });
    }

    const { question, answer } = req.body;

    await faq.update({
      question: question ?? faq.question,
      answer: answer ?? faq.answer,
    });

    return res.status(200).json({
      success: true,
      message: 'FAQ record updated successfully',
      data: faq,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while updating the FAQ record.',
      error: error.message,
    });
  }
};

/**
 * Delete an FAQ record from the database by its primary key identifier.
 *
 * @route   DELETE /api/v1/admin/home/faqs/:id
 * @access  Private/Admin
 */
exports.deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await HomeFaq.findByPk(id);

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: `FAQ record with identifier ${id} was not found.`,
      });
    }

    await faq.destroy();

    return res.status(200).json({
      success: true,
      message: 'FAQ record deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error occurred while deleting the FAQ record.',
      error: error.message,
    });
  }
};