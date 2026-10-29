
const sequelize = require("../config/db");
const Sequelize = require("../config/db")
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
}=require("../model/poperty.model")

// POPERTY-----------------

const createPopertyDetails =async(req,res)=>{
 const t = await sequelize.transaction();
    try{
    const {
        // property
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
        verified,
        status,
        // poperty-Images
        poperty_image,
        poperty_position,
        // poperty-BHKS-details
        bhk_title,
        bhk_price,
        bhk_size,
        bhk_position,
        // floor-plan
        floor_image,
        floor_position,
        // master-plan
        master_image,
        master_position,
        // brochure
        brochure_file,
        // typeofpoperty
        typeofpoperty_id,
        // noof_Bedrooms
        noofbedrooms_id,
        // construction status
        construction_status_id,
        // possession_status
        possessionstatus_id,
        // purchase_type
        purchasetype_id,
        // amenities
        amenities_id,
        // furnishing_status
        furnishingstatus_id,
        // RERA approved
        reraapproved_id,


    }=req.body;

    // Targeted files
const propertyImages = req.files?.poperty_image || [];
const floorImages = req.files?.floor_image || [];
const masterImages = req.files?.master_image || [];
const brochureFile = req.files?.brochure_file?.[0] || null;
  if(!title){
    return res.status(404).json({
        status:false,
        message:"Provide Title"
    })
  };
//   create-poperty
  const newPopertyData = await popertyDetails.create({
        title:title,
        author:author ??null,
        location:location ??null,
        address:address ?? null,
        price:price ??null,
        general_info_date:general_info_date ??null,
        seleable_area:seleable_area ??null,
        bhk:bhk ??null,
        land_area:land_area ??null,
        total_flats:total_flats ??null,
        towers:towers ??null,
        description:description ??null,
        verified:verified ||"1",
        status:status ||"1",
  },{ transaction: t })
console.log("newPopertyData")
//   popertyImage
const popertyImageData = await popertyImage.bulkCreate(
    propertyImages.map((file, index) => ({
        popertydetails_id: newPopertyData.id,
        poperty_image: file.filename,
        poperty_position:poperty_position[index]?? index + 1
    }),{ transaction: t })
);
console.log("popertyImageData")
// BHKS-details
// Convert single values into arrays
if (!Array.isArray(bhk_title)) {
    bhk_title = bhk_title ? [bhk_title] : [];
}
if (!Array.isArray(bhk_price)) {
    bhk_price = bhk_price ? [bhk_price] : [];
}
if (!Array.isArray(bhk_size)) {
    bhk_size = bhk_size ? [bhk_size] : [];
}
if (!Array.isArray(bhk_position)) {
    bhk_position = bhk_position ? [bhk_position] : [];
}
// Save multiple BHK details
const newBHKdetails = await popertyBhks.bulkCreate(
    bhk_title.map((title, index) => ({
        popertydetails_id:newPopertyData.id,
        bhk_title: title,
        bhk_price: bhk_price[index] ?? null,
        bhk_size: bhk_size[index] ?? null,
        bhk_position: bhk_position[index] ?? index + 1
    }),{ transaction: t })
);
console.log("newBHKdetails")
  // floor-plan
  const floorPlanData = await floorPlan.bulkCreate(
    floorImages.map((file, index) => ({
        popertydetails_id: newPopertyData.id,
        floor_image: file.filename,
        floor_position: floor_position[index] ??  index +1
    }),{ transaction: t })
);
console.log("floorPlanData")
// master-plan
const masterPlandata = await masterPlan.bulkCreate(
    masterImages.map((file,index)=>({
         popertydetails_id: newPopertyData.id,
         master_image:file.filename,
         master_position:master_position[index]?? index+1
    }),{ transaction: t })
)
console.log("masterPlandata")
// brochure
const brochureData = await brochure.bulkCreate(
    brochureFile.map((file,index)=>({
        popertydetails_id: newPopertyData.id,
         brochure_file:file.filename
    }),{ transaction: t })
)
console.log("brochure")

// poperty_details+typeofpoperty
if(!Array.isArray(typeofpoperty_id)){
    typeofpoperty_id =typeofpoperty_id ?[typeofpoperty_id] :[]
}
const popertyntypeofpoperty = await popertydetails_typeofpoperty.bulkCreate(
    typeofpoperty_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        typeofpoperty_id: typeId
    }),{ transaction: t })
);
console.log("popertyntypeofpoperty")

// poperty_details+noof_Bedrooms
if(!Array.isArray(noofbedrooms_id)){
    noofbedrooms_id =noofbedrooms_id ?[noofbedrooms_id] :[]
}
const popertynBedrooms = await popertydetails_noof_Bedrooms.bulkCreate(
    noofbedrooms_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        noofbedrooms_id: typeId
    }),{ transaction: t })
);
console.log("popertynBedrooms ")

// poperty_details+construction status
if(!Array.isArray(construction_status_id)){
    construction_status_id =construction_status_id ?[construction_status_id]:[]
}

const popertynconstruction = await popertydetails_construction_status.bulkCreate(
     construction_status_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        construction_status_id: typeId
    }),{ transaction: t })
) 
console.log("popertynconstruction ")

// property_details + possession_status
if(!Array.isArray(possessionstatus_id)){
    possessionstatus_id =possessionstatus_id ?[possessionstatus_id]:[]
}
const popertynconpossessionstatus = await popertydetails_possessionstatus.bulkCreate(
     possessionstatus_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        possessionstatus_id: typeId
    }),{ transaction: t })
) 
console.log("popertynconpossessionstatus")

// property_details + purchase_type
if(!Array.isArray(purchasetype_id)){
    purchasetype_id =purchasetype_id ?[purchasetype_id]:[]
}
const popertynconpurchase_type = await popertydetails_purchasetype.bulkCreate(
     purchasetype_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        purchasetype_id: typeId
    }),{ transaction: t })
) 
console.log("popertynconpurchase_type")

// property_details + amenities
if(!Array.isArray(amenities_id)){
    amenities_id =amenities_id ?[amenities_id]:[]
}
const popertynamenities = await popertydetails_amenities.bulkCreate(
     amenities_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        amenities_id: typeId
    }),{ transaction: t })
) 
console.log("popertynamenities")

// property_details + furnishing_status
if(!Array.isArray(furnishingstatus_id)){
    furnishingstatus_id =furnishingstatus_id ?[furnishingstatus_id]:[]
}
const popertynfurnishing_status = await popertydetails_furnishingstatus.bulkCreate(
     furnishingstatus_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        furnishingstatus_id: typeId
    }),{ transaction: t })
) 
console.log("popertynfurnishing_status")

// property_details + RERA approved
if(!Array.isArray(reraapproved_id)){
    reraapproved_id =reraapproved_id?[reraapproved_id]:[]
}
const popertynRERAapproved = await popertydetails_reraapproved.bulkCreate(
     reraapproved_id.map((typeId) => ({
        popertydetails_id:newPopertyData.id,
        reraapproved_id: typeId
    }),{ transaction: t })
) 
console.log("popertynRERAapproved")
     await t.commit();

    res.status(201).json({
        status:true,
        message:"Poperty Created Successfully",
        data: {
        newPopertyData: newPopertyData,
        popertyImageData: popertyImageData,
        newBHKdetails:newBHKdetails,
        floorPlanData:floorPlanData,
        masterPlandata:masterPlandata,
        brochureData:brochureData,
        popertyntypeofpoperty:popertyntypeofpoperty,
        popertynBedrooms:popertynBedrooms,
        popertynconstruction:popertynconstruction,
        popertynconpossessionstatus:popertynconpossessionstatus,
        popertynconpurchase_type:popertynconpurchase_type,
        popertynamenities:popertynamenities,
        popertynfurnishing_status:popertynfurnishing_status,
        popertynRERAapproved:popertynRERAapproved,
    }
    })
    }catch (error) {
        console.log("createPopertyDetails Error:", error.message);
         await t.rollback();
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}










// typeofpoperty(1BHK || 2BHK ||3BHK)
const createTypeOfPoperty = async (req, res) => {
    try {
        let { title } = req.body;

        if (!Array.isArray(title)) {
            title = title ? [title] : [];
        }

        const data = await typeofpoperty.bulkCreate(
            title.map((item) => ({
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Property type created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllTypeOfPoperty = async (req, res) => {
    try {
        const data = await typeofpoperty.findAll();

        return res.status(200).json({
            status: true,
            message: "Property types fetched successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Property type not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Property type fetched successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Property type not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Property type updated successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Property type not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Property type deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Bedrooms created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllNoOfBedrooms = async (req, res) => {
    try {
        const data = await no_of_Bedrooms.findAll();

        return res.status(200).json({
            status: true,
            message: "Bedrooms fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Bedroom not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Bedroom fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Bedroom not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Bedroom updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Bedroom not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Bedroom deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Construction status created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllConstructionStatus = async (req, res) => {
    try {
        const data = await constructionStatus.findAll();

        return res.status(200).json({
            status: true,
            message: "Construction statuses fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Construction status not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Construction status fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Construction status not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Construction status updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Construction status not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Construction status deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Possession status created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllPossessionStatus = async (req, res) => {
    try {
        const data = await possessionStatus.findAll();

        return res.status(200).json({
            status: true,
            message: "Possession statuses fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Possession status not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Possession status fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Possession status not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Possession status updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Possession status not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Possession status deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Purchase type created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllPurchaseType = async (req, res) => {
    try {
        const data = await purchaseType.findAll();

        return res.status(200).json({
            status: true,
            message: "Purchase types fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Purchase type not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Purchase type fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Purchase type not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Purchase type updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Purchase type not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Purchase type deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Amenities created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllAmenities = async (req, res) => {
    try {
        const data = await amenities.findAll();

        return res.status(200).json({
            status: true,
            message: "Amenities fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Amenity not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Amenity fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Amenity not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Amenity updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Amenity not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Amenity deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "Furnishing status created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllFurnishingStatus = async (req, res) => {
    try {
        const data = await furnishingStatus.findAll();

        return res.status(200).json({
            status: true,
            message: "Furnishing statuses fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Furnishing status not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Furnishing status fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Furnishing status not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "Furnishing status updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "Furnishing status not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "Furnishing status deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                title: String(item)
            }))
        );

        return res.status(201).json({
            status: true,
            message: "RERA approval created successfully",
            data
        });

    } catch (error) {
        console.log("Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};
const getAllReraApproved = async (req, res) => {
    try {
        const data = await reraApproved.findAll();

        return res.status(200).json({
            status: true,
            message: "RERA approvals fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "RERA approval not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "RERA approval fetched successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "RERA approval not found"
            });
        }

        await data.update({ title });

        return res.status(200).json({
            status: true,
            message: "RERA approval updated successfully",
            data
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
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
                message: "RERA approval not found"
            });
        }

        await data.destroy();

        return res.status(200).json({
            status: true,
            message: "RERA approval deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};






module.exports={


    // poperty
    createPopertyDetails,

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
}
