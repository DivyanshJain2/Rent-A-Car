const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../config/token/generateToken");
const User = require("../../models/cardetailsSchema");
const validateMongodbId = require("../../utils/validateMongodbID");
const fetchcarController = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});
module.exports = { 
    fetchcarController
};