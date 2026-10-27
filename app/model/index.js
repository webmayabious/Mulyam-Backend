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
}= require("../model/poperty.model")






sequelize.sync()
.then(()=>{console.log(chalk.cyan("🔄 Db Synced Successfully"));})
.catch((error)=>{console.log(chalk.red("❌ Database Connection Failed"), err)})

