const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    username: { type: String, required: true },
    education: { 
        university: {type: String, required: true},
        degree: {type: String, required: true},
        levelOfCompletion: {type: String, required: true},
    },
    rating: { type: Number, required: true },
    experience: { 
        work1: {
            companyName: {type: String, required: true},
            position: {type: String, required:true},
            period: {type: String, required:true},
            description: {type: String, required:true},
        },
        work2: {
            companyName: {type: String, required: true},
            position: {type: String, required:true},
            period: {type: String, required:true},
            description: {type: String, required:true},
        },
        work3: {
            companyName: {type: String, required: true},
            position: {type: String, required:true},
            period: {type: String, required:true},
            description: {type: String, required:true},
        },
    },
    technicalSkills: {
        skill_1: {type: String},
        skill_2: {type: String},
        skill_3: {type: String},
        skill_4: {type: String},
        skill_5: {type: String},
        skill_6: {type: String},
        skill_7: {type: String},
        skill_8: {type: String},
        skill_9: {type: String},
        skill_10: {type: String},
    },
    hobbies: {
        hobbie_1: {type: String},
        hobbie_2: {type: String},
        hobbie_3: {type: String},
        hobbie_4: {type: String},
        hobbie_5: {type: String},
        hobbie_6: {type: String},
        hobbie_7: {type: String},
        hobbie_8: {type: String},
        hobbie_9: {type: String},
        hobbie_10: {type: String},
    },
    hardSkills: {
        type: Number, required: true,
    },
    languages: {
        language_1: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_2: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_3: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_4: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_5: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
        frontEnd: {
            language_1: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_2: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_3: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_4: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_5: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
        },
        backEnd: {
            language_1: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_2: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
            language_3: {
                name: {type: String, required: true},
                rate: {type: Number, required: true},
                duration: {type: Number, required: true},
            },
        },
    },
    database: {
        base_1: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        base_2: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        base_3: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
    },
    mobileTools: {
        tool_1: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        tool_2: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        tool_3: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        tool_4: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
        tool_5: {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
            duration: {type: Number, required: true},
        },
    },
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