const express = require("express")
const router = express.Router()

const adminCheck = require("../miiddleware/admin_check")

const {
     // poperty
    createPopertyDetails,
    getAllPopertyDetails,
    getSinglePopertyDetails,
    updatePopertyDetails,
    deletePopertyDetails,
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

      //Frontend
  frontendSearch, 
}=require("../controller/poperty.con")

const upload =require("../miiddleware/image_upload");

const propertyUpload = upload.fields([
    { name: "poperty_image", maxCount: 10 },
    { name: "floor_image", maxCount: 10 },
    { name: "master_image", maxCount: 10 },
    { name: "brochure_file", maxCount: 10 }
]);

// health_check
router.get("/",(req,res)=>{
    res.status(200).json({
        status:true,
        message:"Mulyam Server Running Fine......"
    })
})

// Poperty
router.post("/add-property",adminCheck, propertyUpload,createPopertyDetails);
router.get("/getAllPopertyDetails",getAllPopertyDetails);
router.get("/getSinglePopertyDetails/:id",adminCheck,getSinglePopertyDetails);
router.put(
    "/updatePopertyDetails/:id",
    upload.fields([
        { name: "poperty_image", maxCount: 20 },
        { name: "floor_image", maxCount: 20 },
        { name: "master_image", maxCount: 20 },
        { name: "brochure_file", maxCount: 5 }
    ]),adminCheck,
    updatePopertyDetails
);
router.delete(
    "/deletePopertyDetails/:id",adminCheck,
    deletePopertyDetails
);


// typeofpoperty(1BHK || 2BHK ||3BHK)
router.post("/create_type_of_poperty",adminCheck,createTypeOfPoperty)
router.get("/property-type", getAllTypeOfPoperty);
router.get("/property-type/:id",adminCheck, getSingleTypeOfPoperty);
router.put("/property-type/:id",adminCheck, updateTypeOfPoperty);
router.delete("/property-type/:id",adminCheck, deleteTypeOfPoperty);

// no_of_Bedrooms
router.post("/bedrooms",adminCheck, createNoOfBedrooms);
router.get("/bedrooms", getAllNoOfBedrooms);
router.get("/bedrooms/:id",adminCheck, getSingleNoOfBedrooms);
router.put("/bedrooms/:id",adminCheck, updateNoOfBedrooms);
router.delete("/bedrooms/:id",adminCheck, deleteNoOfBedrooms);

// construction status
router.post("/construction-status",adminCheck, createConstructionStatus);
router.get("/construction-status", getAllConstructionStatus);
router.get("/construction-status/:id",adminCheck, getSingleConstructionStatus);
router.put("/construction-status/:id",adminCheck, updateConstructionStatus);
router.delete("/construction-status/:id",adminCheck ,deleteConstructionStatus);

// Possession Status
router.post("/possession-status",adminCheck, createPossessionStatus);
router.get("/possession-status", getAllPossessionStatus);
router.get("/possession-status/:id",adminCheck, getSinglePossessionStatus);
router.put("/possession-status/:id",adminCheck, updatePossessionStatus);
router.delete("/possession-status/:id",adminCheck, deletePossessionStatus);

 // Purchase Types
router.post("/purchase-type",adminCheck, createPurchaseType);
router.get("/purchase-type", getAllPurchaseType);
router.get("/purchase-type/:id",adminCheck, getSinglePurchaseType);
router.put("/purchase-type/:id",adminCheck, updatePurchaseType);
router.delete("/purchase-type/:id",adminCheck, deletePurchaseType);

// amenities
router.post("/amenities",adminCheck, createAmenities);
router.get("/amenities", getAllAmenities);
router.get("/amenities/:id",adminCheck, getSingleAmenities);
router.put("/amenities/:id",adminCheck, updateAmenities);
router.delete("/amenities/:id",adminCheck, deleteAmenities);

//Furnishing Status
router.post("/furnishing-status",adminCheck, createFurnishingStatus);
router.get("/furnishing-status", getAllFurnishingStatus);
router.get("/furnishing-status/:id",adminCheck, getSingleFurnishingStatus);
router.put("/furnishing-status/:id",adminCheck, updateFurnishingStatus);
router.delete("/furnishing-status/:id",adminCheck, deleteFurnishingStatus);

// RERA Approved
router.post("/rera-approved",adminCheck, createReraApproved);
router.get("/rera-approved", getAllReraApproved);
router.get("/rera-approved/:id",adminCheck, getSingleReraApproved);
router.put("/rera-approved/:id",adminCheck,updateReraApproved);
router.delete("/rera-approved/:id",adminCheck, deleteReraApproved);

  //Frontend
  router.get("/search",frontendSearch), 

module.exports=router