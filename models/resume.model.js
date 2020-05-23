const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkExperienceSchema = new Schema(
    {
        companyName: {type: String, required: false},
        position: {type: String, required:false},
        period: {type: String, required:false},
        description: {type: String, required:false},
    }
);

const LanguageSchema = new Schema(
    {
        name: {type: String, required: false},
        rate: {type: Number, required: false},
        duration: {type: Number, required: false},
    }
);

const resumeSchema = new Schema({
    username: { type: String, required: false },
    education: { 
        university: {type: String, required: false},
        degree: {type: String, required: false},
        levelOfCompletion: {type: String, required: false},
    },
    rating: { type: Number, required: false },
    
    experience: [WorkExperienceSchema],
    
    technicalSkills: [String],
    
    hobbies: [String],

    hardSkills: { // What's this?
        type: Number, 
        required: false,
    },

    spokenLanguages: [LanguageSchema],

    frontEnd: [LanguageSchema],

    backEnd: [LanguageSchema],

    database: [LanguageSchema],
    
    mobileTools: [LanguageSchema],
    
    softSkills: {
        type: Number, required: false,
    },

    selfMotivation: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
    timeManagement: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
    teamWork: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
    communication: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
    performance: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
    conflictResolution: {
        rate: {type: Number, required: false},
        description: {type: String, required: false},
    },
}, {
    timestamps: false,
});

const resume = mongoose.model('resume', resumeSchema);

module.exports = resume;