const sequelize = require('../config/db');
// const upload = require("../../uploads")
const {
  AboutUs,
  AboutMissionVision,
  AboutTeamIntro,
  AboutTeam,
  AboutOurVenture,
} = require('../model/aboutUsModel')(sequelize);

// =============================================================================
// 1. ABOUT US (Create, Bulk Create, Get All, Get By ID, Update, Delete)
// =============================================================================

exports.createAboutUsBulk = async (req, res) => {
  try {
    const files = req.files || [];
    if (!req.body.aboutData) {
      return res.status(400).json({ success: false, message: 'Missing "aboutData" payload.' });
    }

    let parsedData = typeof req.body.aboutData === 'string'
      ? JSON.parse(req.body.aboutData)
      : req.body.aboutData;

    const records = [];
    let fileIdx = 0;

    for (let i = 0; i < parsedData.length; i++) {
      const item = parsedData[i];
      let resolvedImageUrl = files[fileIdx] ? `../../uploads/${files[fileIdx].filename}` : item.imageUrl;
      if (files[fileIdx]) fileIdx++;

      if (!resolvedImageUrl) {
        return res.status(400).json({ success: false, message: `Image missing for item at index ${i}` });
      }

      records.push({
        heading: item.heading,
        description: item.description,
        imageUrl: resolvedImageUrl,
        isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
      });
    }

    const created = await AboutUs.bulkCreate(records);
    return res.status(201).json({ success: true, message: 'About Us entries created', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllAboutUs = async (req, res) => {
  try {
    const data = await AboutUs.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAboutUsById = async (req, res) => {
  try {
    const data = await AboutUs.findByPk(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Record not found' });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAboutUs = async (req, res) => {
  try {
    
    const item = await AboutUs.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Record not found' });

    const { heading, description, isActive } = req.body;
    const imageUrl = req.file ? `../../uploads/${req.file.filename}` : item.imageUrl;

    await item.update({
      heading: heading ?? item.heading,
      description: description ?? item.description,
      imageUrl,
      isActive: isActive !== undefined ? (isActive === 'true' || isActive === true) : item.isActive,
    });

    return res.status(200).json({ success: true, message: 'About Us updated', data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAboutUs = async (req, res) => {
  try {
    const item = await AboutUs.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Record not found' });
    await item.destroy();
    return res.status(200).json({ success: true, message: 'Record deleted' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// =============================================================================
// 2. MISSION & VISION (Get All, Get By ID, Update only)
// =============================================================================

exports.getAllMissionVision = async (req, res) => {
  try {
    const data = await AboutMissionVision.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMissionVisionById = async (req, res) => {
  try {
    const data = await AboutMissionVision.findByPk(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Record not found' });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateMissionVision = async (req, res) => {
  try {
    const item = await AboutMissionVision.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Record not found' });

    const { heading, description } = req.body;
    const imageUrl = req.file ? `/uploads/about/${req.file.filename}` : item.imageUrl;

    await item.update({
      heading: heading ?? item.heading,
      description: description ?? item.description,
      imageUrl,
    });

    return res.status(200).json({ success: true, message: 'Mission/Vision updated', data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// =============================================================================
// 3. TEAM INTRO (Get All, Get By ID, Update only)
// =============================================================================

exports.getAllTeamIntro = async (req, res) => {
  try {
    const data = await AboutTeamIntro.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTeamIntroById = async (req, res) => {
  try {
    const data = await AboutTeamIntro.findByPk(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Record not found' });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTeamIntro = async (req, res) => {
  try {
    const item = await AboutTeamIntro.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Record not found' });

    const { heading, description } = req.body;
    await item.update({
      heading: heading ?? item.heading,
      description: description ?? item.description,
    });

    return res.status(200).json({ success: true, message: 'Team Intro updated', data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// =============================================================================
// 4. TEAM MEMBERS (Bulk Create, Get All, Get By ID, Update with isActive)
// =============================================================================

exports.createTeamBulk = async (req, res) => {
  try {
    const files = req.files || [];
    if (!req.body.teamData) {
      return res.status(400).json({ success: false, message: 'Missing "teamData" payload.' });
    }

    let parsedData = typeof req.body.teamData === 'string'
      ? JSON.parse(req.body.teamData)
      : req.body.teamData;

    const records = [];
    let fileIdx = 0;

    for (let i = 0; i < parsedData.length; i++) {
      const item = parsedData[i];
      let resolvedImageUrl = files[fileIdx] ? `../../uploads/${files[fileIdx].filename}` : item.imageUrl;
      if (files[fileIdx]) fileIdx++;

      if (!resolvedImageUrl) {
        return res.status(400).json({ success: false, message: `Image missing for team member at index ${i}` });
      }

      records.push({
        imageUrl: resolvedImageUrl,
        name: item.name,
        designation: item.designation,
        description: item.description,
        isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
      });
    }

    const created = await AboutTeam.bulkCreate(records);
    return res.status(201).json({ success: true, message: 'Team members created', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllTeamMembers = async (req, res) => {
  try {
    const data = await AboutTeam.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTeamMemberById = async (req, res) => {
  try {
    const data = await AboutTeam.findByPk(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Team member not found' });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const item = await AboutTeam.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Team member not found' });

    const { name, designation, description, isActive } = req.body;
    const imageUrl = req.file ? `../../uploads/${req.file.filename}` : item.imageUrl;

    await item.update({
      name: name ?? item.name,
      designation: designation ?? item.designation,
      description: description ?? item.description,
      imageUrl,
      isActive: isActive !== undefined ? (isActive === 'true' || isActive === true) : item.isActive,
    });

    return res.status(200).json({ success: true, message: 'Team member updated', data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// =============================================================================
// 5. OUR VENTURES (Bulk Create, Get All, Get By ID, Update with isActive)
// =============================================================================

exports.createVenturesBulk = async (req, res) => {
  try {
    const files = req.files || [];
    if (!req.body.venturesData) {
      return res.status(400).json({ success: false, message: 'Missing "venturesData" payload.' });
    }

    let parsedData = typeof req.body.venturesData === 'string'
      ? JSON.parse(req.body.venturesData)
      : req.body.venturesData;

    const records = [];
    let fileIdx = 0;

    for (let i = 0; i < parsedData.length; i++) {
      const item = parsedData[i];
      let resolvedImageUrl = files[fileIdx] ? `../../uploads/${files[fileIdx].filename}` : item.imageUrl;
      if (files[fileIdx]) fileIdx++;

      if (!resolvedImageUrl) {
        return res.status(400).json({ success: false, message: `Image missing for venture at index ${i}` });
      }

      records.push({
        imageUrl: resolvedImageUrl,
        heading: item.heading,
        description: item.description,
        isActive: item.isActive !== undefined ? Boolean(item.isActive) : true,
      });
    }

    const created = await AboutOurVenture.bulkCreate(records);
    return res.status(201).json({ success: true, message: 'Ventures created', data: created });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllVentures = async (req, res) => {
  try {
    const data = await AboutOurVenture.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getVentureById = async (req, res) => {
  try {
    const data = await AboutOurVenture.findByPk(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Venture not found' });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateVenture = async (req, res) => {
  try {
    const item = await AboutOurVenture.findByPk(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Venture not found' });

    const { heading, description, isActive } = req.body;
    const imageUrl = req.file ? `../../uploads/${req.file.filename}` : item.imageUrl;

    await item.update({
      heading: heading ?? item.heading,
      description: description ?? item.description,
      imageUrl,
      isActive: isActive !== undefined ? (isActive === 'true' || isActive === true) : item.isActive,
    });

    return res.status(200).json({ success: true, message: 'Venture updated', data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};