const sequelize = require("../config/db");
const { Sequelize } = require("../config/db");

const { DataTypes } = require("sequelize");

// *************POPERTY-MODELS*************
// poperty-details
const popertyDetails = sequelize.define(
  "popertydetails",
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
    author: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    general_info_date:{
        type: DataTypes.STRING,
    },
    saleable_area: {
      type: DataTypes.STRING,
    },
    bhk: {
      type: DataTypes.STRING,
    },
    land_area: {
      type: DataTypes.STRING,
    },
    total_flats: {
      type: DataTypes.STRING,
    },
    towers: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },

    verified:{
        type:DataTypes.STRING,
        comment:"1=verified,0=not verified",
        defaultValue:"1"
    },
    status:{
        type:DataTypes.STRING,
        comment:"1=active,0=inactive",
        defaultValue:"1"
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertydetails",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// poperty-Images
const popertyImage = sequelize.define(
  "popertyimage",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    poperty_image:{
       type:DataTypes.STRING
    },
    poperty_position:{
       type:DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertyimage",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// poperty-BHKS-details
const popertyBhks = sequelize.define(
  "popertybhk",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    bhk_title:{
       type:DataTypes.STRING
    },
    bhk_price:{
       type:DataTypes.STRING
    },
    bhk_size:{
       type:DataTypes.STRING
    },
    bhk_position:{
       type:DataTypes.INTEGER,
       allowNull:true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertybhk",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// floor-plan
const floorPlan = sequelize.define(
  "floorplan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    floor_image:{
       type:DataTypes.STRING
    },
    floor_position:{
       type:DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"floorplan",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// master-plan
const masterPlan = sequelize.define(
  "masterplan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    master_image:{
       type:DataTypes.STRING
    },
    master_position:{
       type:DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"masterplan",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// brochure
const brochure = sequelize.define(
  "brochure",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    brochure_file:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"brochure",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);




// *************FILTER-OPTIONS-MODELS*************
// typeofpoperty(1BHK || 2BHK ||3BHK)
const typeofpoperty = sequelize.define(
  "typeofpopertys",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"typeofpopertys",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// no_of_Bedrooms
const no_of_Bedrooms = sequelize.define(
  "noofbedrooms",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"noofbedrooms",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// construction status
const constructionStatus = sequelize.define(
  "constructionstatus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"constructionstatus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// Possession Status
const possessionStatus = sequelize.define(
  "possessionstatus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"possessionstatus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// Purchase Types
const purchaseType = sequelize.define(
  "purchasetype",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"purchasetype",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// amenities
const amenities = sequelize.define(
  "amenities",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"amenities",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
//Furnishing Status
const furnishingStatus = sequelize.define(
  "furnishingstatus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"furnishingstatus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);
// RERA Approved
const reraApproved = sequelize.define(
  "reraapproved",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
       type:DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"reraapproved",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);


// *********ASSOSIATE TABLE**************
// poperty_details+typeofpoperty
const popertydetails_typeofpoperty=sequelize.define(
    "popertydetails_typeofpoperty",{   
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id:{
        type:DataTypes.INTEGER
    },
    typeofpoperty_id:{
        type:DataTypes.INTEGER
    },
   
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertydetails_typeofpoperty",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
    
);
// poperty_details+noof_Bedrooms
const popertydetails_noof_Bedrooms=sequelize.define(
    "popertydetails_noofbedrooms",{   
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id:{
        type:DataTypes.INTEGER
    },
    noofbedrooms_id:{
        type:DataTypes.INTEGER
    },
   
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertydetails_noofbedrooms",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
    
);
// poperty_details+construction status
const popertydetails_construction_status=sequelize.define(
    "popertydetails_construction_status",{   
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id:{
        type:DataTypes.INTEGER
    },
    construction_status_id:{
        type:DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName:"popertydetails_construction_status",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
    
);
// property_details + possession_status
const popertydetails_possessionstatus = sequelize.define(
  "popertydetails_possessionstatus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    possessionstatus_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "popertydetails_possessionstatus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// property_details + purchase_type
const popertydetails_purchasetype = sequelize.define(
  "popertydetails_purchasetype",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    purchasetype_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "popertydetails_purchasetype",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// property_details + amenities
const popertydetails_amenities = sequelize.define(
  "popertydetails_amenities",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    amenities_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "popertydetails_amenities",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// property_details + furnishing_status
const popertydetails_furnishingstatus = sequelize.define(
  "popertydetails_furnishingstatus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    furnishingstatus_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "popertydetails_furnishingstatus",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// property_details + RERA approved
const popertydetails_reraapproved = sequelize.define(
  "popertydetails_reraapproved",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    popertydetails_id: {
      type: DataTypes.INTEGER,
    },
    reraapproved_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "popertydetails_reraapproved",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);


module.exports={
// *************POPERTY-MODELS*************
popertyDetails,
popertyImage,
popertyBhks,
floorPlan,
masterPlan,
brochure,

// *************FILTER-OPTIONS-MODELS*************
amenities,
typeofpoperty,
no_of_Bedrooms,
constructionStatus,
possessionStatus,
purchaseType,
furnishingStatus,
reraApproved,

// *********ASSOSIATE TABLE**************
popertydetails_typeofpoperty,
popertydetails_noof_Bedrooms,
popertydetails_construction_status,
popertydetails_possessionstatus,
popertydetails_purchasetype,
popertydetails_amenities,
popertydetails_furnishingstatus,
popertydetails_reraapproved,
}