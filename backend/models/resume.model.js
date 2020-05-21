const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkExperienceSchema = new Schema(
    {
        companyName: {type: String, required: true},
        position: {type: String, required:true},
        period: {type: String, required:true},
        description: {type: String, required:true},
    }
);

const LanguageSchema = new Schema(
    {
        name: {type: String, required: true},
        rate: {type: Number, required: true},
        duration: {type: Number, required: true},
    }
);

const resumeSchema = new Schema({
    username: { type: String, required: true },
    education: { 
        university: {type: String, required: true},
        degree: {type: String, required: true},
        levelOfCompletion: {type: String, required: true},
    },
    rating: { type: Number, required: true },
    
    experience: [WorkExperienceSchema],
    
    technicalSkills: [String],
    
    hobbies: [String],

    hardSkills: { // What's this?
        type: Number, 
        required: true,
    },

    spokenLanguages: [LanguageSchema],

    frontEnd: [LanguageSchema],

    backEnd: [LanguageSchema],

    database: [LanguageSchema],
    
    mobileTools: [LanguageSchema],
    
    softSkills: {
        type: Number, required: true,
    },

    selfMotivation: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
    timeManagement: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
    teamWork: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
    communication: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
    performance: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
    conflictResolution: {
        rate: {type: Number, required: true},
        description: {type: String, required: true},
    },
}, {
    timestamps: true,
});

const resume = mongoose.model('resume', resumeSchema);

module.exports = resume;