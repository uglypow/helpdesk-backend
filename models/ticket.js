const mongoose = require('mongoose')
const moment = require('moment-timezone');

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'resolved', 'rejected']
    },
    created_at: String,
    updated_at: String
})

ticketSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Ticket', ticketSchema)