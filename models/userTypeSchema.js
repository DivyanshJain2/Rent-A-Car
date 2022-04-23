const usertype = new mongoose.Schema({
    type_id : {
        type : Number,
        unique : true,
        required : [true, "Type id must be provided."],
    },

    type_name : {
        type : String,
        required : [true, "Type must be provided."],
    }
})