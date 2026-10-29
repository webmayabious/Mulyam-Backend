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

// popertyDetails+popertyImage
popertyDetails.hasMany(popertyImage,{
    foreignKey:"popertydetails_id"
});
popertyImage.belongsTo(popertyDetails)

// popertyDetails+popertyBhks
popertyDetails.hasMany(popertyBhks,{
    foreignKey:"popertydetails_id"
});
popertyBhks.belongsTo(popertyDetails)

// popertyDetails+floorPlan
popertyDetails.hasMany(floorPlan,{
    foreignKey:"popertydetails_id"
});
floorPlan.belongsTo(popertyDetails)

// popertyDetails+masterPlan
popertyDetails.hasMany(masterPlan,{
    foreignKey:"popertydetails_id"
});
masterPlan.belongsTo(popertyDetails)

// popertyDetails+brochure
popertyDetails.hasMany(brochure,{
    foreignKey:"popertydetails_id"
});
brochure.belongsTo(popertyDetails)

// popertydetails_typeofpoperty
popertyDetails.belongsToMany(typeofpoperty, {
    through: popertydetails_typeofpoperty,
    foreignKey: "popertydetails_id",
    otherKey: "typeofpoperty_id"
});
typeofpoperty.belongsToMany(popertyDetails, {
    through: popertydetails_typeofpoperty,
    foreignKey: "typeofpoperty_id",
    otherKey: "popertydetails_id"
});
// popertydetails_no_of_Bedrooms
popertyDetails.belongsToMany(no_of_Bedrooms, {
    through: popertydetails_noof_Bedrooms,
    foreignKey: "popertydetails_id",
    otherKey: "noofbedrooms_id"
});
no_of_Bedrooms.belongsToMany(popertyDetails, {
    through: popertydetails_noof_Bedrooms,
    foreignKey: "noofbedrooms_id",
    otherKey: "popertydetails_id"
});
// popertydetails_construction_status
popertyDetails.belongsToMany(constructionStatus, {
    through: popertydetails_construction_status,
    foreignKey: "popertydetails_id",
    otherKey: "construction_status_id"
});
constructionStatus.belongsToMany(popertyDetails, {
    through: popertydetails_construction_status,
    foreignKey: "construction_status_id",
    otherKey: "popertydetails_id"
});
// popertydetails_possessionstatus
popertyDetails.belongsToMany(possessionStatus, {
    through: popertydetails_possessionstatus,
    foreignKey: "popertydetails_id",
    otherKey: "possessionstatus_id"
});
possessionStatus.belongsToMany(popertyDetails, {
    through: popertydetails_possessionstatus,
    foreignKey: "possessionstatus_id",
    otherKey: "popertydetails_id"
});
// popertydetails_purchasetype
popertyDetails.belongsToMany(purchaseType, {
    through: popertydetails_purchasetype,
    foreignKey: "popertydetails_id",
    otherKey: "purchasetype_id"
});
purchaseType.belongsToMany(popertyDetails, {
    through:popertydetails_purchasetype,
    foreignKey: "purchasetype_id",
    otherKey: "popertydetails_id"
});
// popertydetails_amenities
popertyDetails.belongsToMany(amenities, {
    through: popertydetails_amenities,
    foreignKey: "popertydetails_id",
    otherKey: "amenities_id"
});
amenities.belongsToMany(popertyDetails, {
    through:popertydetails_amenities,
    foreignKey: "amenities_id",
    otherKey: "popertydetails_id"
});
// popertydetails_furnishingstatus
popertyDetails.belongsToMany(furnishingStatus, {
    through: popertydetails_furnishingstatus,
    foreignKey: "popertydetails_id",
    otherKey: "furnishingstatus_id"
});
furnishingStatus.belongsToMany(popertyDetails, {
    through:popertydetails_furnishingstatus,
    foreignKey: "furnishingstatus_id",
    otherKey: "popertydetails_id"
});
// popertydetails_reraapproved
popertyDetails.belongsToMany(reraApproved, {
    through: popertydetails_reraapproved,
    foreignKey: "popertydetails_id",
    otherKey: "reraapproved_id"
});
reraApproved.belongsToMany(popertyDetails, {
    through:popertydetails_reraapproved,
    foreignKey: "reraapproved_id",
    otherKey: "popertydetails_id"
});






sequelize.sync()
.then(()=>{console.log(chalk.cyan("🔄 Db Synced Successfully"));})
.catch((error)=>{console.log(chalk.red("❌ Database Connection Failed"), err)})

