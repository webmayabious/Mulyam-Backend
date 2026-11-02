const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Table 1: home_clients (For Trusted Names / Clients)
  const HomeClient = sequelize.define('HomeClient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'image_url', // Database column will be named image_url
    },
    heading: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'is_active', // Database column will be named is_active
    },
  }, {
    tableName: 'home_clients',
    timestamps: true, // Automatically generates createdAt and updatedAt
    underscored: true,
  });

  // Table 2: home_faqs (For Frequently Asked Questions)
  const HomeFaq = sequelize.define('HomeFaq', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'home_faqs',
    timestamps: true, // Automatically generates createdAt and updatedAt
    underscored: true,
  });

  return {
    HomeClient,
    HomeFaq,
  };
};