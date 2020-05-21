const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const developerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    company: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    contact_1: {
        type: String,
        required: true,
    },
    contact_2: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const developer = mongoose.model('developer', developerSchema);

module.exports = developer;