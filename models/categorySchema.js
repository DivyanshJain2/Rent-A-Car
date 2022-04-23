const category = new mongoose.Schema({
    category_id : {
        type : Number,
        unique : true,
        required : [true, " category Id must be provided."],
    },

    category_type : {
        type : String,
        required : [true, "Type must be provided."],
    },
})
