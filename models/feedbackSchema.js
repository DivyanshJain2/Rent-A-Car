const feedback = new mongoose.Schema({
    feedback_id : {
        type : Number,
        unique : true,
        required : [true, "Feedback id must be provided."],
    },

    feedback_date : {
        type : Date,
        required : [true, "Feedback date must be provided."],
    },

    feedback_text : {
        type : String,
        required : [true, "Feedback text must be provided."],
    }
})