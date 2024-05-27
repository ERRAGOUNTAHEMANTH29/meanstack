const userModel = require("../models/model")

const createUserDetails = async(body)=>{
    const createData = await userModel.create(body)
    return createData;
}

module.exports = {
    createUserDetails
}