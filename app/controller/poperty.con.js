
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
}=require("../model/poperty.model")


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
}
