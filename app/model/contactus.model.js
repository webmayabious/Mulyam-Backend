const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const contactUS = sequelize.define(
  "contactus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "contactus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
const getInTouch = sequelize.define(
  "getintouch",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    contactus_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
    },
    contact: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      comment: "1 = active, 0 = inactive",
      defaultValue: "1",
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "getintouch",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

module.exports = { contactUS,getInTouch}
