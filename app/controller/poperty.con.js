const sequelize = require("../config/db");
const Sequelize = require("../config/db");
const fs = require("fs");
const path = require("path");
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
} = require("../model/poperty.model");

// POPERTY-----------------

// const createPopertyDetails =async(req,res)=>{
//  const t = await sequelize.transaction();
//     try{
//     const {
//         // property
//         title,
//         author,
//         location,
//         address,
//         price,
//         general_info_date,
//         seleable_area,
//         bhk,
//         land_area,
//         total_flats,
//         towers,
//         description,
//         project_rera,
//         verified,
//         status,
//         // poperty-Images
//         poperty_image,
//         poperty_position,
//         // poperty-BHKS-details
//         bhk_title,
//         bhk_price,
//         bhk_size,
//         bhk_position,
//         // floor-plan
//         floor_image,
//         floor_position,
//         // master-plan
//         master_image,
//         master_position,
//         // brochure
//         brochure_file,
//         // typeofpoperty
//         typeofpoperty_id,
//         // noof_Bedrooms
//         noofbedrooms_id,
//         // construction status
//         construction_status_id,
//         // possession_status
//         possessionstatus_id,
//         // purchase_type
//         purchasetype_id,
//         // amenities
//         amenities_id,
//         // furnishing_status
//         furnishingstatus_id,
//         // RERA approved
//         reraapproved_id,

//     }=req.body;

//     // Targeted files
// const propertyImages = req.files?.poperty_image || [];
// const floorImages = req.files?.floor_image || [];
// const masterImages = req.files?.master_image || [];
// const brochureFile = req.files?.brochure_file?.[0] || null;
//   if(!title){
//     return res.status(404).json({
//         status:false,
//         message:"Provide Title"
//     })
//   };
// //   create-poperty
//   const newPopertyData = await popertyDetails.create({
//         title:title,
//         author:author ??null,
//         location:location ??null,
//         address:address ?? null,
//         price:price ??null,
//         general_info_date:general_info_date ??null,
//         seleable_area:seleable_area ??null,
//         bhk:bhk ??null,
//         land_area:land_area ??null,
//         total_flats:total_flats ??null,
//         towers:towers ??null,
//         description:description ??null,
//         project_rera:project_rera ?? null,
//         verified:verified ||"1",
//         status:status ||"1",
//   },{ transaction: t })
// console.log("newPopertyData")
// //   popertyImage
// const popertyImageData = await popertyImage.bulkCreate(
//     propertyImages.map((file, index) => ({
//         popertydetails_id: newPopertyData.id,
//         poperty_image: file.filename,
//         poperty_position:poperty_position[index]?? index + 1
//     }),{ transaction: t })
// );
// console.log("popertyImageData")
// // BHKS-details
// // Convert single values into arrays
// if (!Array.isArray(bhk_title)) {
//     bhk_title = bhk_title ? [bhk_title] : [];
// }
// if (!Array.isArray(bhk_price)) {
//     bhk_price = bhk_price ? [bhk_price] : [];
// }
// if (!Array.isArray(bhk_size)) {
//     bhk_size = bhk_size ? [bhk_size] : [];
// }
// if (!Array.isArray(bhk_position)) {
//     bhk_position = bhk_position ? [bhk_position] : [];
// }
// // Save multiple BHK details
// const newBHKdetails = await popertyBhks.bulkCreate(
//     bhk_title.map((title, index) => ({
//         popertydetails_id:newPopertyData.id,
//         bhk_title: title,
//         bhk_price: bhk_price[index] ?? null,
//         bhk_size: bhk_size[index] ?? null,
//         bhk_position: bhk_position[index] ?? index + 1
//     }),{ transaction: t })
// );
// console.log("newBHKdetails")
//   // floor-plan
//   const floorPlanData = await floorPlan.bulkCreate(
//     floorImages.map((file, index) => ({
//         popertydetails_id: newPopertyData.id,
//         floor_image: file.filename,
//         floor_position: floor_position[index] ??  index +1
//     }),{ transaction: t })
// );
// console.log("floorPlanData")
// // master-plan
// const masterPlandata = await masterPlan.bulkCreate(
//     masterImages.map((file,index)=>({
//          popertydetails_id: newPopertyData.id,
//          master_image:file.filename,
//          master_position:master_position[index]?? index+1
//     }),{ transaction: t })
// )
// console.log("masterPlandata")
// // brochure
// const brochureData = await brochure.bulkCreate(
//     brochureFile.map((file,index)=>({
//         popertydetails_id: newPopertyData.id,
//          brochure_file:file.filename
//     }),{ transaction: t })
// )
// console.log("brochure")

// // poperty_details+typeofpoperty
// if(!Array.isArray(typeofpoperty_id)){
//     typeofpoperty_id =typeofpoperty_id ?[typeofpoperty_id] :[]
// }
// const popertyntypeofpoperty = await popertydetails_typeofpoperty.bulkCreate(
//     typeofpoperty_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         typeofpoperty_id: typeId
//     }),{ transaction: t })
// );
// console.log("popertyntypeofpoperty")

// // poperty_details+noof_Bedrooms
// if(!Array.isArray(noofbedrooms_id)){
//     noofbedrooms_id =noofbedrooms_id ?[noofbedrooms_id] :[]
// }
// const popertynBedrooms = await popertydetails_noof_Bedrooms.bulkCreate(
//     noofbedrooms_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         noofbedrooms_id: typeId
//     }),{ transaction: t })
// );
// console.log("popertynBedrooms ")

// // poperty_details+construction status
// if(!Array.isArray(construction_status_id)){
//     construction_status_id =construction_status_id ?[construction_status_id]:[]
// }

// const popertynconstruction = await popertydetails_construction_status.bulkCreate(
//      construction_status_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         construction_status_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynconstruction ")

// // property_details + possession_status
// if(!Array.isArray(possessionstatus_id)){
//     possessionstatus_id =possessionstatus_id ?[possessionstatus_id]:[]
// }
// const popertynconpossessionstatus = await popertydetails_possessionstatus.bulkCreate(
//      possessionstatus_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         possessionstatus_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynconpossessionstatus")

// // property_details + purchase_type
// if(!Array.isArray(purchasetype_id)){
//     purchasetype_id =purchasetype_id ?[purchasetype_id]:[]
// }
// const popertynconpurchase_type = await popertydetails_purchasetype.bulkCreate(
//      purchasetype_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         purchasetype_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynconpurchase_type")

// // property_details + amenities
// if(!Array.isArray(amenities_id)){
//     amenities_id =amenities_id ?[amenities_id]:[]
// }
// const popertynamenities = await popertydetails_amenities.bulkCreate(
//      amenities_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         amenities_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynamenities")

// // property_details + furnishing_status
// if(!Array.isArray(furnishingstatus_id)){
//     furnishingstatus_id =furnishingstatus_id ?[furnishingstatus_id]:[]
// }
// const popertynfurnishing_status = await popertydetails_furnishingstatus.bulkCreate(
//      furnishingstatus_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         furnishingstatus_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynfurnishing_status")

// // property_details + RERA approved
// if(!Array.isArray(reraapproved_id)){
//     reraapproved_id =reraapproved_id?[reraapproved_id]:[]
// }
// const popertynRERAapproved = await popertydetails_reraapproved.bulkCreate(
//      reraapproved_id.map((typeId) => ({
//         popertydetails_id:newPopertyData.id,
//         reraapproved_id: typeId
//     }),{ transaction: t })
// )
// console.log("popertynRERAapproved")
//      await t.commit();

//     res.status(201).json({
//         status:true,
//         message:"Poperty Created Successfully",
//         data: {
//         newPopertyData: newPopertyData,
//         popertyImageData: popertyImageData,
//         newBHKdetails:newBHKdetails,
//         floorPlanData:floorPlanData,
//         masterPlandata:masterPlandata,
//         brochureData:brochureData,
//         popertyntypeofpoperty:popertyntypeofpoperty,
//         popertynBedrooms:popertynBedrooms,
//         popertynconstruction:popertynconstruction,
//         popertynconpossessionstatus:popertynconpossessionstatus,
//         popertynconpurchase_type:popertynconpurchase_type,
//         popertynamenities:popertynamenities,
//         popertynfurnishing_status:popertynfurnishing_status,
//         popertynRERAapproved:popertynRERAapproved,
//     }
//     })
//     }catch (error) {
//         console.log("createPopertyDetails Error:", error.message);
//          await t.rollback();
//         return res.status(500).json({
//             status: false,
//             message: "Something went wrong",
//             error: error.message
//         });
//     }
// }
const createPopertyDetails = async (req, res) => {
  let t;

  try {
    t = await sequelize.transaction();
    const {
      // PROPERTY DETAILS
      title,
      author,
      location,
      address,
      price,
      general_info_date,
      seleable_area,
      bhk,
      land_area,
      total_flats,
      towers,
      description,
      project_rera,
      verified,
      status,

      // PROPERTY IMAGES
      poperty_position,

      // BHK DETAILS
      bhk_title,
      bhk_price,
      bhk_size,
      bhk_position,

      // FLOOR PLAN
      floor_position,

      // MASTER PLAN
      master_position,

      // PROPERTY TYPE
      typeofpoperty_id,

      // BEDROOMS
      noofbedrooms_id,

      // CONSTRUCTION STATUS
      construction_status_id,

      // POSSESSION STATUS
      possessionstatus_id,

      // PURCHASE TYPE
      purchasetype_id,

      // AMENITIES
      amenities_id,

      // FURNISHING STATUS
      furnishingstatus_id,

      // RERA APPROVED
      reraapproved_id,
    } = req.body;

    // =====================================
    // CONVERT ALL VALUES INTO ARRAYS
    // =====================================

    const toArray = (value) => {
      if (value === undefined || value === null || value === "") {
        return [];
      }

      // Already an array
      if (Array.isArray(value)) {
        return value.flatMap((item) => toArray(item));
      }

      if (typeof value === "string") {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
          return [];
        }

        // JSON array
        if (trimmedValue.startsWith("[")) {
          try {
            const parsed = JSON.parse(trimmedValue);

            if (Array.isArray(parsed)) {
              return parsed.flatMap((item) => toArray(item));
            }
          } catch (error) {
            // Continue to comma-separated handling
          }
        }

        // Comma-separated values
        if (trimmedValue.includes(",")) {
          return trimmedValue
            .split(",")
            .map((item) => item.trim())
            .filter((item) => item !== "");
        }

        return [trimmedValue];
      }

      return [value];
    };

    // =====================================
    // CONVERT REQUEST BODY VALUES
    // =====================================

    const propertyPositions = toArray(poperty_position);

    const bhkTitles = toArray(bhk_title);
    const bhkPrices = toArray(bhk_price);
    const bhkSizes = toArray(bhk_size);
    const bhkPositions = toArray(bhk_position);

    const floorPositions = toArray(floor_position);
    const masterPositions = toArray(master_position);

    const typeofpopertyIds = toArray(typeofpoperty_id);
    const bedroomIds = toArray(noofbedrooms_id);
    const constructionStatusIds = toArray(construction_status_id);
    const possessionStatusIds = toArray(possessionstatus_id);
    const purchaseTypeIds = toArray(purchasetype_id);
    const amenitiesIds = toArray(amenities_id);
    const furnishingStatusIds = toArray(furnishingstatus_id);
    const reraApprovedIds = toArray(reraapproved_id);

    // =====================================
    // CHECK RECEIVED DATA
    // =====================================

    console.log("BHK TITLES:", bhkTitles);
    console.log("BHK PRICES:", bhkPrices);
    console.log("BHK SIZES:", bhkSizes);

    console.log("PROPERTY TYPE:", typeofpopertyIds);
    console.log("BEDROOMS:", bedroomIds);
    console.log("CONSTRUCTION:", constructionStatusIds);
    console.log("POSSESSION:", possessionStatusIds);
    console.log("PURCHASE:", purchaseTypeIds);
    console.log("AMENITIES:", amenitiesIds);
    console.log("FURNISHING:", furnishingStatusIds);
    console.log("RERA:", reraApprovedIds);

    // =====================================
    // GET UPLOADED FILES
    // =====================================

    const propertyImages = req.files?.poperty_image || [];
    const floorImages = req.files?.floor_image || [];
    const masterImages = req.files?.master_image || [];
    const brochureFiles = req.files?.brochure_file || [];

    // =====================================
    // VALIDATE TITLE
    // =====================================

    if (!title) {
      await t.rollback();

      return res.status(400).json({
        status: false,
        message: "Provide Title",
      });
    }

    // =====================================
    // CREATE PROPERTY DETAILS
    // =====================================

    const newPopertyData = await popertyDetails.create(
      {
        title: title,
        author: author ?? null,
        location: location ?? null,
        address: address ?? null,
        price: price ?? null,
        general_info_date: general_info_date ?? null,
        seleable_area: seleable_area ?? null,
        bhk: bhk ?? null,
        land_area: land_area ?? null,
        total_flats: total_flats ?? null,
        towers: towers ?? null,
        description: description ?? null,
        project_rera: project_rera ?? null,
        verified: verified || "1",
        status: status || "1",
      },
      {
        transaction: t,
      },
    );

    console.log("Property Created:", newPopertyData.id);

    // =====================================
    // PROPERTY IMAGES
    // =====================================

    const popertyImageData = await popertyImage.bulkCreate(
      propertyImages.map((file, index) => ({
        popertydetails_id: newPopertyData.id,
        poperty_image: file.filename,
        poperty_position: propertyPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    console.log("Property Images Created");

    // =====================================
    // BHK DETAILS
    // =====================================

    const newBHKdetails = await popertyBhks.bulkCreate(
      bhkTitles.map((bhkTitle, index) => ({
        popertydetails_id: newPopertyData.id,
        bhk_title: bhkTitle,
        bhk_price: bhkPrices[index] ?? null,
        bhk_size: bhkSizes[index] ?? null,
        bhk_position: bhkPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    console.log("BHK Details Created:", newBHKdetails.length);

    // =====================================
    // FLOOR PLAN
    // =====================================

    const floorPlanData = await floorPlan.bulkCreate(
      floorImages.map((file, index) => ({
        popertydetails_id: newPopertyData.id,
        floor_image: file.filename,
        floor_position: floorPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    console.log("Floor Plans Created");

    // =====================================
    // MASTER PLAN
    // =====================================

    const masterPlandata = await masterPlan.bulkCreate(
      masterImages.map((file, index) => ({
        popertydetails_id: newPopertyData.id,
        master_image: file.filename,
        master_position: masterPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    console.log("Master Plans Created");

    // =====================================
    // BROCHURE
    // =====================================

    const brochureData = await brochure.bulkCreate(
      brochureFiles.map((file) => ({
        popertydetails_id: newPopertyData.id,
        brochure_file: file.filename,
      })),

      { transaction: t },
    );

    console.log("Brochures Created");

    // =====================================
    // PROPERTY + PROPERTY TYPE
    // =====================================

    const popertyntypeofpoperty = await popertydetails_typeofpoperty.bulkCreate(
      typeofpopertyIds.map((typeId) => ({
        popertydetails_id: newPopertyData.id,
        typeofpoperty_id: typeId,
      })),

      { transaction: t },
    );

    console.log("Property Types Created");

    // =====================================
    // PROPERTY + BEDROOMS
    // =====================================

    const popertynBedrooms = await popertydetails_noof_Bedrooms.bulkCreate(
      bedroomIds.map((typeId) => ({
        popertydetails_id: newPopertyData.id,
        noofbedrooms_id: typeId,
      })),

      { transaction: t },
    );

    console.log("Bedrooms Created");

    // =====================================
    // PROPERTY + CONSTRUCTION STATUS
    // =====================================

    const popertynconstruction =
      await popertydetails_construction_status.bulkCreate(
        constructionStatusIds.map((typeId) => ({
          popertydetails_id: newPopertyData.id,
          construction_status_id: typeId,
        })),

        { transaction: t },
      );

    console.log("Construction Status Created");

    // =====================================
    // PROPERTY + POSSESSION STATUS
    // =====================================

    const popertynconpossessionstatus =
      await popertydetails_possessionstatus.bulkCreate(
        possessionStatusIds.map((typeId) => ({
          popertydetails_id: newPopertyData.id,
          possessionstatus_id: typeId,
        })),

        { transaction: t },
      );

    console.log("Possession Status Created");

    // =====================================
    // PROPERTY + PURCHASE TYPE
    // =====================================

    const popertynconpurchase_type =
      await popertydetails_purchasetype.bulkCreate(
        purchaseTypeIds.map((typeId) => ({
          popertydetails_id: newPopertyData.id,
          purchasetype_id: typeId,
        })),

        { transaction: t },
      );

    console.log("Purchase Type Created");

    // =====================================
    // PROPERTY + AMENITIES
    // =====================================

    const popertynamenities = await popertydetails_amenities.bulkCreate(
      amenitiesIds.map((typeId) => ({
        popertydetails_id: newPopertyData.id,
        amenities_id: typeId,
      })),

      { transaction: t },
    );

    console.log("Amenities Created");

    // =====================================
    // PROPERTY + FURNISHING STATUS
    // =====================================

    const popertynfurnishing_status =
      await popertydetails_furnishingstatus.bulkCreate(
        furnishingStatusIds.map((typeId) => ({
          popertydetails_id: newPopertyData.id,
          furnishingstatus_id: typeId,
        })),

        { transaction: t },
      );

    console.log("Furnishing Status Created");

    // =====================================
    // PROPERTY + RERA APPROVED
    // =====================================

    const popertynRERAapproved = await popertydetails_reraapproved.bulkCreate(
      reraApprovedIds.map((typeId) => ({
        popertydetails_id: newPopertyData.id,
        reraapproved_id: typeId,
      })),

      { transaction: t },
    );

    console.log("RERA Approved Created");

    // =====================================
    // COMMIT TRANSACTION
    // =====================================

    await t.commit();

    // =====================================
    // SUCCESS RESPONSE
    // =====================================

    return res.status(201).json({
      status: true,
      message: "Property Created Successfully",

      data: {
        newPopertyData: newPopertyData,
        popertyImageData: popertyImageData,
        newBHKdetails: newBHKdetails,
        floorPlanData: floorPlanData,
        masterPlandata: masterPlandata,
        brochureData: brochureData,

        popertyntypeofpoperty: popertyntypeofpoperty,
        popertynBedrooms: popertynBedrooms,
        popertynconstruction: popertynconstruction,
        popertynconpossessionstatus: popertynconpossessionstatus,
        popertynconpurchase_type: popertynconpurchase_type,
        popertynamenities: popertynamenities,
        popertynfurnishing_status: popertynfurnishing_status,
        popertynRERAapproved: popertynRERAapproved,
      },
    });
  } catch (error) {
    console.log("createPopertyDetails Error:", error);

    // Rollback only if transaction is not already finished
    if (t && !t.finished) {
      await t.rollback();
    }

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllPopertyDetails = async (req, res) => {
  try {
    const allPopertyDetails = await popertyDetails.findAll({
      include: [
        // PROPERTY IMAGES
        {
          model: popertyImage,
          required: false,
          attributes: ["id", "poperty_image", "poperty_position"],
        },

        // BHK DETAILS
        {
          model: popertyBhks,
          required: false,
          attributes: [
            "id",
            "bhk_title",
            "bhk_price",
            "bhk_size",
            "bhk_position",
          ],
        },

        // FLOOR PLAN
        {
          model: floorPlan,
          required: false,
          attributes: ["id", "floor_image", "floor_position"],
        },

        // MASTER PLAN
        {
          model: masterPlan,
          required: false,
          attributes: ["id", "master_image", "master_position"],
        },

        // BROCHURE
        {
          model: brochure,
          required: false,
          attributes: ["id", "brochure_file"],
        },

        // PROPERTY TYPE
        {
          model: typeofpoperty,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // BEDROOMS
        {
          model: no_of_Bedrooms,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // CONSTRUCTION STATUS
        {
          model: constructionStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // POSSESSION STATUS
        {
          model: possessionStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // PURCHASE TYPE
        {
          model: purchaseType,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // AMENITIES
        {
          model: amenities,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // FURNISHING STATUS
        {
          model: furnishingStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // RERA APPROVED
        {
          model: reraApproved,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },
      ],

      order: [["id", "DESC"]],
    });

    if (!allPopertyDetails.length) {
      return res.status(404).json({
        status: false,
        message: "No Properties Found",
        data: [],
      });
    }

    return res.status(200).json({
      status: true,
      message: "All Property Details Fetched Successfully",

      total: allPopertyDetails.length,

      data: allPopertyDetails,
    });
  } catch (error) {
    console.log("getAllPopertyDetails Error:", error);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",

      error: error.message,
    });
  }
};
const getSinglePopertyDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Property ID is required",
      });
    }

    const singlePopertyDetails = await popertyDetails.findOne({
      where: {
        id: id,
      },

      include: [
        // PROPERTY IMAGES
        {
          model: popertyImage,
          required: false,
          attributes: ["id", "poperty_image", "poperty_position"],
        },

        // BHK DETAILS
        {
          model: popertyBhks,
          required: false,
          attributes: [
            "id",
            "bhk_title",
            "bhk_price",
            "bhk_size",
            "bhk_position",
          ],
        },

        // FLOOR PLAN
        {
          model: floorPlan,
          required: false,
          attributes: ["id", "floor_image", "floor_position"],
        },

        // MASTER PLAN
        {
          model: masterPlan,
          required: false,
          attributes: ["id", "master_image", "master_position"],
        },

        // BROCHURE
        {
          model: brochure,
          required: false,
          attributes: ["id", "brochure_file"],
        },

        // PROPERTY TYPE
        {
          model: typeofpoperty,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // BEDROOMS
        {
          model: no_of_Bedrooms,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // CONSTRUCTION STATUS
        {
          model: constructionStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // POSSESSION STATUS
        {
          model: possessionStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // PURCHASE TYPE
        {
          model: purchaseType,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // AMENITIES
        {
          model: amenities,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // FURNISHING STATUS
        {
          model: furnishingStatus,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },

        // RERA APPROVED
        {
          model: reraApproved,
          through: {
            attributes: [],
          },
          attributes: ["id", "title"],
          required: false,
        },
      ],
    });

    if (!singlePopertyDetails) {
      return res.status(404).json({
        status: false,
        message: "Property Not Found",
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: "Single Property Details Fetched Successfully",

      data: singlePopertyDetails,
    });
  } catch (error) {
    console.log("getSinglePopertyDetails Error:", error);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",

      error: error.message,
    });
  }
};
const updatePopertyDetails = async (req, res) => {
  let t;

  try {
    t = await sequelize.transaction();

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Property ID is required",
      });
    }

    // =====================================
    // REQUEST BODY
    // =====================================

    const {
      title,
      author,
      location,
      address,
      price,
      general_info_date,
      seleable_area,
      bhk,
      land_area,
      total_flats,
      towers,
      description,
      project_rera,
      verified,
      status,

      // PROPERTY IMAGES
      poperty_position,

      // BHK DETAILS
      bhk_title,
      bhk_price,
      bhk_size,
      bhk_position,

      // FLOOR PLAN
      floor_position,

      // MASTER PLAN
      master_position,

      // FILTER IDS
      typeofpoperty_id,
      noofbedrooms_id,
      construction_status_id,
      possessionstatus_id,
      purchasetype_id,
      amenities_id,
      furnishingstatus_id,
      reraapproved_id,

      // IDS TO DELETE
      delete_property_image_ids,
      delete_bhk_ids,
      delete_floor_image_ids,
      delete_master_image_ids,
      delete_brochure_ids,
    } = req.body;

    // =====================================
    // HELPER: CONVERT VALUES TO ARRAYS
    // =====================================

    const toArray = (value) => {
      if (value === undefined || value === null || value === "") {
        return [];
      }

      if (Array.isArray(value)) {
        return value.flatMap((item) => toArray(item));
      }

      if (typeof value === "string") {
        const trimmed = value.trim();

        if (!trimmed) return [];

        if (trimmed.startsWith("[")) {
          try {
            const parsed = JSON.parse(trimmed);

            if (Array.isArray(parsed)) {
              return parsed.flatMap((item) => toArray(item));
            }
          } catch (error) {}
        }

        if (trimmed.includes(",")) {
          return trimmed
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
        }

        return [trimmed];
      }

      return [value];
    };

    // =====================================
    // CONVERT ARRAYS
    // =====================================

    const propertyPositions = toArray(poperty_position);

    const bhkTitles = toArray(bhk_title);
    const bhkPrices = toArray(bhk_price);
    const bhkSizes = toArray(bhk_size);
    const bhkPositions = toArray(bhk_position);

    const floorPositions = toArray(floor_position);
    const masterPositions = toArray(master_position);

    const typeofpopertyIds = toArray(typeofpoperty_id);
    const bedroomIds = toArray(noofbedrooms_id);
    const constructionStatusIds = toArray(construction_status_id);
    const possessionStatusIds = toArray(possessionstatus_id);
    const purchaseTypeIds = toArray(purchasetype_id);
    const amenitiesIds = toArray(amenities_id);
    const furnishingStatusIds = toArray(furnishingstatus_id);
    const reraApprovedIds = toArray(reraapproved_id);

    const deletePropertyImageIds = toArray(delete_property_image_ids);
    const deleteBhkIds = toArray(delete_bhk_ids);
    const deleteFloorImageIds = toArray(delete_floor_image_ids);
    const deleteMasterImageIds = toArray(delete_master_image_ids);
    const deleteBrochureIds = toArray(delete_brochure_ids);

    // =====================================
    // FIND EXISTING PROPERTY
    // =====================================

    const existingProperty = await popertyDetails.findByPk(id, {
      transaction: t,
    });

    if (!existingProperty) {
      await t.rollback();

      return res.status(404).json({
        status: false,
        message: "Property Not Found",
      });
    }

    // =====================================
    // UPDATE PROPERTY DETAILS
    // =====================================

    const updateData = {};

    const propertyFields = {
      title,
      author,
      location,
      address,
      price,
      general_info_date,
      seleable_area,
      bhk,
      land_area,
      total_flats,
      towers,
      description,
      project_rera,
      verified,
      status,
    };

    Object.entries(propertyFields).forEach(([key, value]) => {
      if (value !== undefined) {
        updateData[key] = value;
      }
    });

    await existingProperty.update(updateData, {
      transaction: t,
    });

    // =====================================
    // GET UPLOADED FILES
    // =====================================

    const propertyImages = req.files?.poperty_image || [];
    const floorImages = req.files?.floor_image || [];
    const masterImages = req.files?.master_image || [];
    const brochureFiles = req.files?.brochure_file || [];

    // =====================================
    // FILE DELETE HELPER
    // =====================================

    const deleteRecords = async (model, deleteIds, fileColumn) => {
      if (!deleteIds.length) return;

      const records = await model.findAll({
        where: {
          id: deleteIds,
          popertydetails_id: id,
        },
        transaction: t,
      });

      for (const record of records) {
        if (fileColumn) {
          const filePath = path.join(
            process.cwd(),
            "uploads",
            record[fileColumn],
          );

          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }

        await record.destroy({
          transaction: t,
        });
      }
    };

    // =====================================
    // DELETE OLD PROPERTY IMAGES
    // =====================================

    await deleteRecords(popertyImage, deletePropertyImageIds, "poperty_image");

    // =====================================
    // ADD NEW PROPERTY IMAGES
    // =====================================

    const popertyImageData = await popertyImage.bulkCreate(
      propertyImages.map((file, index) => ({
        popertydetails_id: id,
        poperty_image: file.filename,
        poperty_position: propertyPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    // =====================================
    // DELETE OLD BHK DETAILS
    // =====================================

    if (deleteBhkIds.length) {
      await popertyBhks.destroy({
        where: {
          id: deleteBhkIds,
          popertydetails_id: id,
        },
        transaction: t,
      });
    }

    // =====================================
    // UPSERT BHK DETAILS
    // =====================================

    const bhkIds = toArray(req.body.bhk_ids);

    const newBHKdetails = [];

    for (let index = 0; index < bhkTitles.length; index++) {
      const bhkData = {
        popertydetails_id: id,
        bhk_title: bhkTitles[index],
        bhk_price: bhkPrices[index] ?? null,
        bhk_size: bhkSizes[index] ?? null,
        bhk_position: bhkPositions[index] ?? index + 1,
      };

      if (bhkIds[index]) {
        const existingBhk = await popertyBhks.findOne({
          where: {
            id: bhkIds[index],
            popertydetails_id: id,
          },
          transaction: t,
        });

        if (!existingBhk) {
          throw new Error(
            `BHK ID ${bhkIds[index]} does not belong to this property`,
          );
        }

        await existingBhk.update(bhkData, {
          transaction: t,
        });

        newBHKdetails.push(existingBhk);
      } else {
        const createdBhk = await popertyBhks.create(bhkData, {
          transaction: t,
        });

        newBHKdetails.push(createdBhk);
      }
    }

    // =====================================
    // FLOOR PLAN
    // =====================================

    await deleteRecords(floorPlan, deleteFloorImageIds, "floor_image");

    const floorPlanData = await floorPlan.bulkCreate(
      floorImages.map((file, index) => ({
        popertydetails_id: id,
        floor_image: file.filename,
        floor_position: floorPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    // =====================================
    // MASTER PLAN
    // =====================================

    await deleteRecords(masterPlan, deleteMasterImageIds, "master_image");

    const masterPlandata = await masterPlan.bulkCreate(
      masterImages.map((file, index) => ({
        popertydetails_id: id,
        master_image: file.filename,
        master_position: masterPositions[index] ?? index + 1,
      })),

      { transaction: t },
    );

    // =====================================
    // BROCHURE
    // =====================================

    await deleteRecords(brochure, deleteBrochureIds, "brochure_file");

    const brochureData = await brochure.bulkCreate(
      brochureFiles.map((file) => ({
        popertydetails_id: id,
        brochure_file: file.filename,
      })),

      { transaction: t },
    );

    // =====================================
    // UPDATE FILTER ASSOCIATIONS
    // =====================================

    const updateAssociations = async (model, foreignKey, ids) => {
      // Delete existing association records
      await model.destroy({
        where: {
          popertydetails_id: id,
        },
        transaction: t,
      });

      // Insert updated association records
      if (ids.length) {
        await model.bulkCreate(
          [...new Set(ids.map(Number))].map((typeId) => ({
            popertydetails_id: id,
            [foreignKey]: typeId,
          })),

          { transaction: t },
        );
      }
    };

    // =====================================
    // PROPERTY TYPE
    // =====================================

    await updateAssociations(
      popertydetails_typeofpoperty,
      "typeofpoperty_id",
      typeofpopertyIds,
    );

    // =====================================
    // BEDROOMS
    // =====================================

    await updateAssociations(
      popertydetails_noof_Bedrooms,
      "noofbedrooms_id",
      bedroomIds,
    );

    // =====================================
    // CONSTRUCTION STATUS
    // =====================================

    await updateAssociations(
      popertydetails_construction_status,
      "construction_status_id",
      constructionStatusIds,
    );

    // =====================================
    // POSSESSION STATUS
    // =====================================

    await updateAssociations(
      popertydetails_possessionstatus,
      "possessionstatus_id",
      possessionStatusIds,
    );

    // =====================================
    // PURCHASE TYPE
    // =====================================

    await updateAssociations(
      popertydetails_purchasetype,
      "purchasetype_id",
      purchaseTypeIds,
    );

    // =====================================
    // AMENITIES
    // =====================================

    await updateAssociations(
      popertydetails_amenities,
      "amenities_id",
      amenitiesIds,
    );

    // =====================================
    // FURNISHING STATUS
    // =====================================

    await updateAssociations(
      popertydetails_furnishingstatus,
      "furnishingstatus_id",
      furnishingStatusIds,
    );

    // =====================================
    // RERA APPROVED
    // =====================================

    await updateAssociations(
      popertydetails_reraapproved,
      "reraapproved_id",
      reraApprovedIds,
    );

    // =====================================
    // COMMIT TRANSACTION
    // =====================================

    await t.commit();

    // =====================================
    // SUCCESS RESPONSE
    // =====================================

    return res.status(200).json({
      status: true,
      message: "Property Updated Successfully",

      data: {
        property: existingProperty,
        popertyImageData,
        newBHKdetails,
        floorPlanData,
        masterPlandata,
        brochureData,
      },
    });
  } catch (error) {
    console.log("updatePopertyDetails Error:", error);

    if (t && !t.finished) {
      await t.rollback();
    }

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deletePopertyDetails = async (req, res) => {
  let t;

  try {
    t = await sequelize.transaction();

    const { id } = req.params;

    if (!id) {
      await t.rollback();

      return res.status(400).json({
        status: false,
        message: "Property ID is required",
      });
    }

    // Find property
    const property = await popertyDetails.findByPk(id, {
      transaction: t,
    });

    if (!property) {
      await t.rollback();

      return res.status(404).json({
        status: false,
        message: "Property Not Found",
      });
    }

    // Delete associated records
    await popertyImage.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertyBhks.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await floorPlan.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await masterPlan.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await brochure.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    // Delete filter association records
    await popertydetails_typeofpoperty.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_noof_Bedrooms.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_construction_status.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_possessionstatus.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_purchasetype.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_amenities.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_furnishingstatus.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    await popertydetails_reraapproved.destroy({
      where: { popertydetails_id: id },
      transaction: t,
    });

    // Delete main property
    await property.destroy({
      transaction: t,
    });

    // Commit transaction
    await t.commit();

    return res.status(200).json({
      status: true,
      message: "Property and All Associated Records Deleted Successfully",
    });
  } catch (error) {
    console.log("deletePopertyDetails Error:", error);

    if (t && !t.finished) {
      await t.rollback();
    }

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const { Op } = require("sequelize");

const frontendSearch = async (req, res) => {
  try {
    const {
      verified,
      minPrice,
      maxPrice,
      propertyType: propertyTypeFilter,
      bedrooms: bedroomsFilter,
      constructionStatus: constructionStatusFilter,
      minArea,
      maxArea,
      possessionStatus: possessionStatusFilter,
      purchaseType: purchaseTypeFilter,
      amenities: amenitiesFilter,
      furnishingStatus: furnishingStatusFilter,
      reraApproved: reraApprovedFilter,
    } = req.query;

    // =====================================
    // HELPER FUNCTION
    // =====================================

    const toArray = (value) => {
      if (value === undefined || value === null || value === "") {
        return [];
      }

      if (Array.isArray(value)) {
        return value.flatMap((item) => toArray(item));
      }

      if (typeof value === "string") {
        const trimmed = value.trim();

        if (trimmed.startsWith("[")) {
          try {
            const parsed = JSON.parse(trimmed);

            if (Array.isArray(parsed)) {
              return parsed.flatMap((item) => toArray(item));
            }
          } catch (error) {}
        }

        return trimmed
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }

      return [value];
    };

    const whereCondition = {};

    // VERIFIED

    if (verified !== undefined) {
      whereCondition.verified = verified;
    }

    // PRICE

    if (minPrice || maxPrice) {
      whereCondition.price = {};

      if (minPrice) {
        whereCondition.price[Op.gte] = Number(minPrice);
      }

      if (maxPrice) {
        whereCondition.price[Op.lte] = Number(maxPrice);
      }
    }

    // AREA

    if (minArea || maxArea) {
      whereCondition.seleable_area = {};

      if (minArea) {
        whereCondition.seleable_area[Op.gte] = Number(minArea);
      }

      if (maxArea) {
        whereCondition.seleable_area[Op.lte] = Number(maxArea);
      }
    }

    // =====================================
    // CONVERT FILTER VALUES INTO ARRAYS
    // =====================================

    const propertyTypeIds = toArray(propertyTypeFilter);
    const bedroomIds = toArray(bedroomsFilter);
    const constructionStatusIds = toArray(constructionStatusFilter);
    const possessionStatusIds = toArray(possessionStatusFilter);
    const purchaseTypeIds = toArray(purchaseTypeFilter);
    const amenitiesIds = toArray(amenitiesFilter);
    const furnishingStatusIds = toArray(furnishingStatusFilter);
    const reraApprovedIds = toArray(reraApprovedFilter);

    // =====================================
    // ASSOCIATION FILTERS
    // =====================================

    const include = [];

    // PROPERTY TYPE

    if (propertyTypeIds.length > 0) {
      include.push({
        model: typeofpoperty,
        where: {
          id: {
            [Op.in]: propertyTypeIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // BEDROOMS

    if (bedroomIds.length > 0) {
      include.push({
        model: no_of_Bedrooms,
        where: {
          id: {
            [Op.in]: bedroomIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // CONSTRUCTION STATUS

    if (constructionStatusIds.length > 0) {
      include.push({
        model: constructionStatus,
        where: {
          id: {
            [Op.in]: constructionStatusIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // POSSESSION STATUS

    if (possessionStatusIds.length > 0) {
      include.push({
        model: possessionStatus,
        where: {
          id: {
            [Op.in]: possessionStatusIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // PURCHASE TYPE

    if (purchaseTypeIds.length > 0) {
      include.push({
        model: purchaseType,
        where: {
          id: {
            [Op.in]: purchaseTypeIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // AMENITIES

    if (amenitiesIds.length > 0) {
      include.push({
        model: amenities,
        where: {
          id: {
            [Op.in]: amenitiesIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // FURNISHING STATUS

    if (furnishingStatusIds.length > 0) {
      include.push({
        model: furnishingStatus,
        where: {
          id: {
            [Op.in]: furnishingStatusIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // RERA APPROVED

    if (reraApprovedIds.length > 0) {
      include.push({
        model: reraApproved,
        where: {
          id: {
            [Op.in]: reraApprovedIds,
          },
        },
        required: true,
        through: {
          attributes: [],
        },
      });
    }

    // ==========================
    // console.log("Construction Status:", constructionStatus);

    // console.log(
    //   "Is valid Sequelize model:",
    //   typeof constructionStatus?.getTableName === "function",
    // );
    // ======================================
    // =====================================
    // FETCH PROPERTY DATA
    // =====================================

    const properties = await popertyDetails.findAll({
      where: whereCondition,

      include: [
        // PROPERTY IMAGES
        {
          model: popertyImage,
          required: false,
        },

        // BHK DETAILS
        {
          model: popertyBhks,
          required: false,
        },

        // FLOOR PLANS
        {
          model: floorPlan,
          required: false,
        },

        // MASTER PLANS
        {
          model: masterPlan,
          required: false,
        },

        // BROCHURES
        {
          model: brochure,
          required: false,
        },

        // DYNAMIC ASSOCIATION FILTERS
        ...include,
      ],

      distinct: true,

      order: [["id", "DESC"]],
    });

    // =====================================
    // SUCCESS RESPONSE
    // =====================================

    return res.status(200).json({
      status: true,
      message: "Properties fetched successfully",

      total: properties.length,

      data: properties,
    });
  } catch (error) {
    console.log("FrontendSearch Error:", error);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// typeofpoperty(1BHK || 2BHK ||3BHK)
const createTypeOfPoperty = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await typeofpoperty.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Property type created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllTypeOfPoperty = async (req, res) => {
  try {
    const data = await typeofpoperty.findAll();

    return res.status(200).json({
      status: true,
      message: "Property types fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleTypeOfPoperty = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await typeofpoperty.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Property type not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Property type fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateTypeOfPoperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await typeofpoperty.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Property type not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Property type updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteTypeOfPoperty = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await typeofpoperty.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Property type not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Property type deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// no_of_Bedrooms
const createNoOfBedrooms = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await no_of_Bedrooms.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Bedrooms created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllNoOfBedrooms = async (req, res) => {
  try {
    const data = await no_of_Bedrooms.findAll();

    return res.status(200).json({
      status: true,
      message: "Bedrooms fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleNoOfBedrooms = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await no_of_Bedrooms.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Bedroom not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Bedroom fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateNoOfBedrooms = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await no_of_Bedrooms.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Bedroom not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Bedroom updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteNoOfBedrooms = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await no_of_Bedrooms.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Bedroom not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Bedroom deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
// construction status
const createConstructionStatus = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await constructionStatus.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Construction status created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllConstructionStatus = async (req, res) => {
  try {
    const data = await constructionStatus.findAll();

    return res.status(200).json({
      status: true,
      message: "Construction statuses fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleConstructionStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await constructionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Construction status not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Construction status fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateConstructionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await constructionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Construction status not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Construction status updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteConstructionStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await constructionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Construction status not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Construction status deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// Possession Status
const createPossessionStatus = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await possessionStatus.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Possession status created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllPossessionStatus = async (req, res) => {
  try {
    const data = await possessionStatus.findAll();

    return res.status(200).json({
      status: true,
      message: "Possession statuses fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSinglePossessionStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await possessionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Possession status not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Possession status fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updatePossessionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await possessionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Possession status not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Possession status updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deletePossessionStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await possessionStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Possession status not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Possession status deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// Purchase Types
const createPurchaseType = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await purchaseType.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Purchase type created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllPurchaseType = async (req, res) => {
  try {
    const data = await purchaseType.findAll();

    return res.status(200).json({
      status: true,
      message: "Purchase types fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSinglePurchaseType = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await purchaseType.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Purchase type not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Purchase type fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updatePurchaseType = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await purchaseType.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Purchase type not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Purchase type updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deletePurchaseType = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await purchaseType.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Purchase type not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Purchase type deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// amenities
const createAmenities = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await amenities.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Amenities created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllAmenities = async (req, res) => {
  try {
    const data = await amenities.findAll();

    return res.status(200).json({
      status: true,
      message: "Amenities fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleAmenities = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await amenities.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Amenity not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Amenity fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateAmenities = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await amenities.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Amenity not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Amenity updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteAmenities = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await amenities.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Amenity not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Amenity deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

//Furnishing Status
const createFurnishingStatus = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await furnishingStatus.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "Furnishing status created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllFurnishingStatus = async (req, res) => {
  try {
    const data = await furnishingStatus.findAll();

    return res.status(200).json({
      status: true,
      message: "Furnishing statuses fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleFurnishingStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await furnishingStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Furnishing status not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Furnishing status fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateFurnishingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await furnishingStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Furnishing status not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "Furnishing status updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteFurnishingStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await furnishingStatus.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "Furnishing status not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "Furnishing status deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// RERA Approved
const createReraApproved = async (req, res) => {
  try {
    let { title } = req.body;

    if (!Array.isArray(title)) {
      title = title ? [title] : [];
    }

    const data = await reraApproved.bulkCreate(
      title.map((item) => ({
        title: String(item),
      })),
    );

    return res.status(201).json({
      status: true,
      message: "RERA approval created successfully",
      data,
    });
  } catch (error) {
    console.log("Error:", error.message);

    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllReraApproved = async (req, res) => {
  try {
    const data = await reraApproved.findAll();

    return res.status(200).json({
      status: true,
      message: "RERA approvals fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleReraApproved = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await reraApproved.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "RERA approval not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "RERA approval fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updateReraApproved = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const data = await reraApproved.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "RERA approval not found",
      });
    }

    await data.update({ title });

    return res.status(200).json({
      status: true,
      message: "RERA approval updated successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deleteReraApproved = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await reraApproved.findByPk(id);

    if (!data) {
      return res.status(404).json({
        status: false,
        message: "RERA approval not found",
      });
    }

    await data.destroy();

    return res.status(200).json({
      status: true,
      message: "RERA approval deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
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

  // Amenities
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
};
