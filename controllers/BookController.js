const expressAsyncHandler = require("express-async-handler");
const Book = require("../models/bookdetailsSchema");

module.exports.add= async(req, res) => {
    // Check if user already exists
    
    try {
        console.log(req.body);
        const book = await Book.create({
            pickup_date:req.body.pickup_date,
            return_date:req.body.return_date,
            pickup_location:req.body.pickup_location,
            drop_location:req.body.drop_location,
            special_request:req.body.special_request,
            Amount:req.body.Amount,
            upiid:req.body.upiid});
            console.log(book);
        res.json({book,status:201});
    } catch (error) {
        res.json(error);
    }
};

