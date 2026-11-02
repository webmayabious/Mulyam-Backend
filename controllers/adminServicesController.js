const sequelize = require('../config/database');
const { ServiceMainItem, ServiceSecondaryItem } = require('../models/servicesModel')(sequelize);

// =============================================================================
// 1. SERVICE MAIN ITEMS (Images, Headings, Descriptions)
// =============================================================================

/**
 * Bulk create primary service items with image uploads or fallback paths.
 */
exports.createMainItemsBulk = async (req, res) => {
  try {
    const files = req.files || [];

    if (!req.body.servicesData) {
      return res.status(400).json({
        success: false,
        message: 'Missing "servicesData" field containing JSON string array of services.',
      });
    }

    let parsedData;
    try {
      parsedData = typeof req.body.servicesData === 'string'
        ? JSON.parse(req.body.servicesData)
        : req.body.servicesData;
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON format in "servicesData".',
      });
    }

    if (!Array.isArray(parsedData) || parsedData.length === 0) {
      return res.status(400).json({
        success: false,
        message: '"servicesData" must be a non-empty array of service objects.',
      });
    }

    const recordsToInsert = [];
    let fileIndex = 0;

    for (let i = 0; i < parsedData.length; i++) {
      const item = parsedData[i];

      if (!item.heading || !item.description) {
        return res.status(400).json({
          success: false,
          message: `Validation error at index ${i}: "heading" and "description" are required.`,
        });
      }

      let resolvedImageUrl = null;
      if (files[fileIndex]) {
        resolvedImageUrl = `/uploads/services/${files[fileIndex].filename}`;
        fileIndex++;
      } else if (item.imageUrl) {
        resolvedImageUrl = item.imageUrl;
      } else {
        return res.status(400).json({
          success: false,
          message: `Missing image for item at index ${i}. Upload a file or provide "imageUrl".`,
        });
      }

      recordsToInsert.push({
        imageUrl: resolvedImageUrl,
        heading: item.heading,
        description: item.description,
        isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
      });
    }

    const createdItems = await ServiceMainItem.bulkCreate(recordsToInsert);

    return res.status(201).json({
      success: true,
      message: `${createdItems.length} main service items created successfully.`,
      data: createdItems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to bulk create main service items.',
      error: error.message,
    });
  }
};

/**
 * Get all main service items sorted sequentially (1 to n).
 */
exports.getAllMainItems = async (req, res) => {
  try {
    const items = await ServiceMainItem.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve main service items.',
      error: error.message,
    });
  }
};

/**
 * Get single main service item by ID.
 */
exports.getMainItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceMainItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Main service item with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve main service item.',
      error: error.message,
    });
  }
};

/**
 * Update single main service item by ID with optional image replacement.
 */
exports.updateMainItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceMainItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Main service item with ID ${id} not found.`,
      });
    }

    const { heading, description, isActive } = req.body;
    const imageUrl = req.file ? `/uploads/services/${req.file.filename}` : item.imageUrl;

    await item.update({
      imageUrl,
      heading: heading ?? item.heading,
      description: description ?? item.description,
      isActive: isActive !== undefined ? (isActive === 'true' || isActive === true) : item.isActive,
    });

    return res.status(200).json({
      success: true,
      message: 'Main service item updated successfully.',
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update main service item.',
      error: error.message,
    });
  }
};

/**
 * Delete single main service item by ID.
 */
exports.deleteMainItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceMainItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Main service item with ID ${id} not found.`,
      });
    }

    await item.destroy();

    return res.status(200).json({
      success: true,
      message: 'Main service item deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete main service item.',
      error: error.message,
    });
  }
};

// =============================================================================
// 2. SERVICE SECONDARY ITEMS (Heading, SubHeading, Description)
// =============================================================================

/**
 * Bulk create secondary service items (Pure JSON).
 */
exports.createSecondaryItemsBulk = async (req, res) => {
  try {
    const payload = req.body;
    const itemsArray = Array.isArray(payload) ? payload : (payload.items || [payload]);

    if (!itemsArray || itemsArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'A non-empty array of secondary service items is required.',
      });
    }

    for (let i = 0; i < itemsArray.length; i++) {
      const item = itemsArray[i];
      if (!item.heading || !item.description) {
        return res.status(400).json({
          success: false,
          message: `Validation error at index ${i}: "heading" and "description" are required.`,
        });
      }
    }

    const createdItems = await ServiceSecondaryItem.bulkCreate(itemsArray);

    return res.status(201).json({
      success: true,
      message: `${createdItems.length} secondary service items created successfully.`,
      data: createdItems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to bulk create secondary service items.',
      error: error.message,
    });
  }
};

/**
 * Get all secondary service items sorted sequentially (1 to n).
 */
exports.getAllSecondaryItems = async (req, res) => {
  try {
    const items = await ServiceSecondaryItem.findAll({
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve secondary service items.',
      error: error.message,
    });
  }
};

/**
 * Get single secondary service item by ID.
 */
exports.getSecondaryItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceSecondaryItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Secondary service item with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve secondary service item.',
      error: error.message,
    });
  }
};

/**
 * Update single secondary service item by ID.
 */
exports.updateSecondaryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceSecondaryItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Secondary service item with ID ${id} not found.`,
      });
    }

    const { heading, subHeading, description, isActive } = req.body;

    await item.update({
      heading: heading ?? item.heading,
      subHeading: subHeading ?? item.subHeading,
      description: description ?? item.description,
      isActive: isActive !== undefined ? Boolean(isActive) : item.isActive,
    });

    return res.status(200).json({
      success: true,
      message: 'Secondary service item updated successfully.',
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to update secondary service item.',
      error: error.message,
    });
  }
};

/**
 * Delete single secondary service item by ID.
 */
exports.deleteSecondaryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ServiceSecondaryItem.findByPk(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Secondary service item with ID ${id} not found.`,
      });
    }

    await item.destroy();

    return res.status(200).json({
      success: true,
      message: 'Secondary service item deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to delete secondary service item.',
      error: error.message,
    });
  }
};