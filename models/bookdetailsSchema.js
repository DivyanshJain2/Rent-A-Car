
const mongoose = require('mongoose');

const bookingdetails = new mongoose.Schema({
   

    pickup_date : {
        type : Date,
        required : [true, "Booking date must be provided."],
    },

    return_date : {
        type : Date,
        required : [true, "Return date must be provided."],
    },

    pickup_location : {
        type : String,
        required : [true, "Pickup location must be provided."],
    },

    drop_location : {
        type : String,
        required : [true, "Drop location must be provided."],
    },

    special_request  :{
        type: String
    },

    Amount : {
        type:Number,
        required : [true, "Pickup location must be provided."],
    
    },

    upiid : {
        type:String
    }
});


const Book = mongoose.model('Book', bookingdetails);

module.exports = Book;