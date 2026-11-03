const sequelize = require("../config/db")
const chalk = require("chalk");
const {
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

}= require("../model/poperty.model")

// contactUS
const { contactUS,getInTouch}=require("../model/contactus.model")

// contactUs+getInTouch
contactUS.hasMany(getInTouch,{
    foreignKey:"contactus_id"
})
getInTouch.belongsTo(contactUS,{
    foreignKey:"contactus_id"
})

// Property + Property Images
popertyDetails.hasMany(popertyImage, {
    foreignKey: "popertydetails_id"
});

popertyImage.belongsTo(popertyDetails, {
    foreignKey: "popertydetails_id"
});


// Property + BHK Details
popertyDetails.hasMany(popertyBhks, {
    foreignKey: "popertydetails_id"
});

popertyBhks.belongsTo(popertyDetails, {
    foreignKey: "popertydetails_id"
});


// Property + Floor Plan
popertyDetails.hasMany(floorPlan, {
    foreignKey: "popertydetails_id"
});

floorPlan.belongsTo(popertyDetails, {
    foreignKey: "popertydetails_id"
});


// Property + Master Plan
popertyDetails.hasMany(masterPlan, {
    foreignKey: "popertydetails_id"
});

masterPlan.belongsTo(popertyDetails, {
    foreignKey: "popertydetails_id"
});


// Property + Brochure
popertyDetails.hasMany(brochure, {
    foreignKey: "popertydetails_id"
});

brochure.belongsTo(popertyDetails, {
    foreignKey: "popertydetails_id"
});


// ==========================================
// PROPERTY DETAILS + PROPERTY TYPE
// ==========================================

popertyDetails.belongsToMany(typeofpoperty, {
    through: popertydetails_typeofpoperty,
    foreignKey: "popertydetails_id",
    otherKey: "typeofpoperty_id",
    uniqueKey: "uq_property_type"
});

typeofpoperty.belongsToMany(popertyDetails, {
    through: popertydetails_typeofpoperty,
    foreignKey: "typeofpoperty_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_type"
});


// ==========================================
// PROPERTY DETAILS + BEDROOMS
// ==========================================

popertyDetails.belongsToMany(no_of_Bedrooms, {
    through: popertydetails_noof_Bedrooms,
    foreignKey: "popertydetails_id",
    otherKey: "noofbedrooms_id",
    uniqueKey: "uq_property_bedroom"
});

no_of_Bedrooms.belongsToMany(popertyDetails, {
    through: popertydetails_noof_Bedrooms,
    foreignKey: "noofbedrooms_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_bedroom"
});


// ==========================================
// PROPERTY DETAILS + CONSTRUCTION STATUS
// ==========================================

popertyDetails.belongsToMany(constructionStatus, {
    through: popertydetails_construction_status,
    foreignKey: "popertydetails_id",
    otherKey: "construction_status_id",
    uniqueKey: "uq_property_construction"
});

constructionStatus.belongsToMany(popertyDetails, {
    through: popertydetails_construction_status,
    foreignKey: "construction_status_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_construction"
});


// ==========================================
// PROPERTY DETAILS + POSSESSION STATUS
// ==========================================

popertyDetails.belongsToMany(possessionStatus, {
    through: popertydetails_possessionstatus,
    foreignKey: "popertydetails_id",
    otherKey: "possessionstatus_id",
    uniqueKey: "uq_property_possession"
});

possessionStatus.belongsToMany(popertyDetails, {
    through: popertydetails_possessionstatus,
    foreignKey: "possessionstatus_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_possession"
});


// ==========================================
// PROPERTY DETAILS + PURCHASE TYPE
// ==========================================

popertyDetails.belongsToMany(purchaseType, {
    through: popertydetails_purchasetype,
    foreignKey: "popertydetails_id",
    otherKey: "purchasetype_id",
    uniqueKey: "uq_property_purchase"
});

purchaseType.belongsToMany(popertyDetails, {
    through: popertydetails_purchasetype,
    foreignKey: "purchasetype_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_purchase"
});


// ==========================================
// PROPERTY DETAILS + AMENITIES
// ==========================================

popertyDetails.belongsToMany(amenities, {
    through: popertydetails_amenities,
    foreignKey: "popertydetails_id",
    otherKey: "amenities_id",
    uniqueKey: "uq_property_amenities"
});

amenities.belongsToMany(popertyDetails, {
    through: popertydetails_amenities,
    foreignKey: "amenities_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_amenities"
});


// ==========================================
// PROPERTY DETAILS + FURNISHING STATUS
// ==========================================

popertyDetails.belongsToMany(furnishingStatus, {
    through: popertydetails_furnishingstatus,
    foreignKey: "popertydetails_id",
    otherKey: "furnishingstatus_id",
    uniqueKey: "uq_property_furnishing"
});

furnishingStatus.belongsToMany(popertyDetails, {
    through: popertydetails_furnishingstatus,
    foreignKey: "furnishingstatus_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_furnishing"
});


// ==========================================
// PROPERTY DETAILS + RERA APPROVED
// ==========================================

popertyDetails.belongsToMany(reraApproved, {
    through: popertydetails_reraapproved,
    foreignKey: "popertydetails_id",
    otherKey: "reraapproved_id",
    uniqueKey: "uq_property_rera"
});

reraApproved.belongsToMany(popertyDetails, {
    through: popertydetails_reraapproved,
    foreignKey: "reraapproved_id",
    otherKey: "popertydetails_id",
    uniqueKey: "uq_property_rera"
});






sequelize.sync()
    .then(() => {
        console.log(chalk.cyan("🔄Database Synced Successfully"));
    })
    .catch((error) => {
        console.log(chalk.red("❌Database Connection Failed"), error);
    });