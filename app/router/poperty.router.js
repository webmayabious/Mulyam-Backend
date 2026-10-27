const express = require("express")
const router = express.Router()

const {
    // typeofpoperty(1BHK || 2BHK ||3BHK)
   createTypeOfPoperty,
   getAllTypeOfPoperty,
   getSingleTypeOfPoperty,
   updateTypeOfPoperty,
   deleteTypeOfPoperty, 
   // no_of_Bedrooms
   createNoOfBedrooms,
    getAllNoOfBedrooms,
    getSingleNoOfBedrooms,
    updateNoOfBedrooms,
    deleteNoOfBedrooms,
    // construction status
    createConstructionStatus,
    getAllConstructionStatus,
    getSingleConstructionStatus,
    updateConstructionStatus,
    deleteConstructionStatus,
    // Possession Status
    createPossessionStatus,
    getAllPossessionStatus,
    getSinglePossessionStatus,
    updatePossessionStatus,
    deletePossessionStatus,
    // Purchase Types
    createPurchaseType,
    getAllPurchaseType,
    getSinglePurchaseType,
    updatePurchaseType,
    deletePurchaseType,
    // amenities
    createAmenities,
    getAllAmenities,
    getSingleAmenities,
    updateAmenities,
    deleteAmenities,
    //Furnishing Status
    createFurnishingStatus,
    getAllFurnishingStatus,
    getSingleFurnishingStatus,
    updateFurnishingStatus,
    deleteFurnishingStatus,
    // RERA Approved
     createReraApproved,
    getAllReraApproved,
    getSingleReraApproved,
    updateReraApproved,
    deleteReraApproved,
}=require("../controller/poperty.con")

// health_check
router.get("/",(req,res)=>{
    res.status(200).json({
        status:true,
        message:"Mulyam Server Running Fine"
    })
})


// typeofpoperty(1BHK || 2BHK ||3BHK)
router.post("/create_type_of_poperty",createTypeOfPoperty)
router.get("/property-type", getAllTypeOfPoperty);
router.get("/property-type/:id", getSingleTypeOfPoperty);
router.put("/property-type/:id", updateTypeOfPoperty);
router.delete("/property-type/:id", deleteTypeOfPoperty);

// no_of_Bedrooms
router.post("/bedrooms", createNoOfBedrooms);
router.get("/bedrooms", getAllNoOfBedrooms);
router.get("/bedrooms/:id", getSingleNoOfBedrooms);
router.put("/bedrooms/:id", updateNoOfBedrooms);
router.delete("/bedrooms/:id", deleteNoOfBedrooms);

// construction status
router.post("/construction-status", createConstructionStatus);
router.get("/construction-status", getAllConstructionStatus);
router.get("/construction-status/:id", getSingleConstructionStatus);
router.put("/construction-status/:id", updateConstructionStatus);
router.delete("/construction-status/:id", deleteConstructionStatus);

// Possession Status
router.post("/possession-status", createPossessionStatus);
router.get("/possession-status", getAllPossessionStatus);
router.get("/possession-status/:id", getSinglePossessionStatus);
router.put("/possession-status/:id", updatePossessionStatus);
router.delete("/possession-status/:id", deletePossessionStatus);

 // Purchase Types
router.post("/purchase-type", createPurchaseType);
router.get("/purchase-type", getAllPurchaseType);
router.get("/purchase-type/:id", getSinglePurchaseType);
router.put("/purchase-type/:id", updatePurchaseType);
router.delete("/purchase-type/:id", deletePurchaseType);

// amenities
router.post("/amenities", createAmenities);
router.get("/amenities", getAllAmenities);
router.get("/amenities/:id", getSingleAmenities);
router.put("/amenities/:id", updateAmenities);
router.delete("/amenities/:id", deleteAmenities);

//Furnishing Status
router.post("/furnishing-status", createFurnishingStatus);
router.get("/furnishing-status", getAllFurnishingStatus);
router.get("/furnishing-status/:id", getSingleFurnishingStatus);
router.put("/furnishing-status/:id", updateFurnishingStatus);
router.delete("/furnishing-status/:id", deleteFurnishingStatus);

// RERA Approved
router.post("/rera-approved", createReraApproved);
router.get("/rera-approved", getAllReraApproved);
router.get("/rera-approved/:id", getSingleReraApproved);
router.put("/rera-approved/:id", updateReraApproved);
router.delete("/rera-approved/:id", deleteReraApproved);

module.exports=router