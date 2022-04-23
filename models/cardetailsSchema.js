const mongoose = require('mongoose');

const cardetails = new mongoose.Schema({
    car_id : {
        type : Number,
        unique : true,
        required : [true, "Car id must be provided."],
    },

    model_name : {
        type : String,
        required : [true, "Name must be provided."],
    },

    RTO_no : {
        type : Number,
        unique : true,
        required : [true, "RTO number must be provided."],
    },

    price : {
        type : Number,
        required : [true, "Price must be provided."],
    },
})
const User = mongoose.model('car', cardetails);

module.exports = User;