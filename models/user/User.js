const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Creating new Schema
const userSchema = new mongoose.Schema (
    {
        firstName: {    
            type: String,
            required: [true, "First name is required!"], 
        },
        lastName: {
            type: String,
            required: [true, "Last name is required!"],
        },
        profilePicture: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png",
        },
        email: {
            type: String,
            required: [true, "Email is required!"],
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
        },
    },
    {
        toJSON: {
            virtual: true,
        },
        toObject: {
            virtual: true,
        },
        timestamps: true,
    }
);

// Hash Password
userSchema.pre('save', async function(next) {
    // Check if the password field is not modified 
    if (!this.isModified('password')) {
        next();    
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Decrypt and match password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// Compile Schema into Models
const User = mongoose.model('User', userSchema);

module.exports = User;