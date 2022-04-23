const mongoose = require("mongoose");



const userdetails = new mongoose.Schema({
    user_id : {
        type : Number,
        unique : true,
        required : [true, "User id must be provided."],
    },

    user_name : {
        type : String,
        required : [true, "Username must be provided."],
    },

    user_password : {
        type : String,
        required : [true, "Password must be provided."],
    },

    user_email : {
        type : String,
        lowercase : true,
        unique : true,
        required : [true, "Email must be provided."],
    },

    DateOfBirth : {
        type : Date,
        required : [true, "Date of birth is required."],
    },

    Mobile_Number : {
        type : Number,
        trim : true,
        pattern : "^([0-9]{10}$",
        unique : true,
        required : [true, "Phone number is must required."],
    },

    user_address : {
        type : String,
        required : [true, "Address must be provided."],
    },
})