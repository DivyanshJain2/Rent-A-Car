const paymentdetails = new mongoose.Schema({
    payment_id : {
        type : Number,
        unique : true,
        required : [true, "Payment id must be provided."],
    },

    amount : {
        type : Number,
        required : [true, "Amount must be provided."],
    },
    
    mode_of_payment : {
        type : String,
        required : [true, "Mode of payment must be provided."],
    },
})
