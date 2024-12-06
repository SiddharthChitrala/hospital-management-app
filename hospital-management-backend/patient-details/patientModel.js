const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phoneNo: {
        type: String,
        required: true,
    },

    appointmentDate: {
        type: String,
        required: true,
    },

    appointmentTime: {
        type: String,
        required: true,
    },
    doctorSpecialization: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    additionalMessage: {
        type: String,
        required: true,
    }
});

const Details = mongoose.model('Details', detailsSchema);

module.exports = Details;