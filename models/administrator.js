//this file is for setting up the structure of an administrator

const mongoose = require('mongoose');

//creating an administrator schema
var AdministratorSchema = new mongoose.Schema({
    //if {} is added to the property, it can have more options
    name: {
        type: String,
        //why not do this in the front end, rather? Maybe the user will disable front end js
        required: [true, "The name is required"],
        minlength: 4
    },

    username: {
        type: String,
        //why not do this in the front end, rather? Maybe the user will disable front end js
        required: [true, "Username is required"],
        unique: true
    },

    password: {
        type: String,
        required: true
        //in case we want to add more options later
    },

    level: {
        type: String,
        default: "basic", // can be either basic or super
        enum: ["basic", "super"]
    }

});

const Administrator = mongoose.model('administrator', AdministratorSchema);

module.exports = Administrator;