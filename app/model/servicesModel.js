const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  /**
   * ServiceMainItem Model
   * Table: service_main_items
   * Represents the primary service offerings containing image visual, heading, and rich text/list descriptions.
   */
  const ServiceMainItem = sequelize.define(
    'ServiceMainItem',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'), // Uses LONGTEXT to store longer formatted strings and HTML elements like <li>
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'service_main_items',
      timestamps: true,
    }
  );

  /**
   * ServiceSecondaryItem Model
   * Table: service_secondary_items
   * Represents supporting or structured card modules containing heading, subheading, description, and status.
   */
  const ServiceSecondaryItem = sequelize.define(
    'ServiceSecondaryItem',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subHeading: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'service_secondary_items',
      timestamps: true,
    }
  );

  return { ServiceMainItem, ServiceSecondaryItem };
};