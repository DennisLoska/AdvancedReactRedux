const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Define the user model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', async function(next) {
    const user = this;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
});

// Create the model class
const modelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = modelClass;