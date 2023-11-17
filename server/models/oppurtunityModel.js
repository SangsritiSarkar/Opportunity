const mongoose = require('mongoose');

const opprtunityModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A title is required'],
        },
        org: {
            type: String,
            required: [true, 'A organisation is required'],
        },
        deadline: {
            type: String,
            // required: [true, 'A deadline is required'],
        },
        lastDate: {
            type: Date
        },
        description: {
            type: String,
        },
        tags: {
            type: [String],
            required: [true, 'tags is required'],
        },
        type: {
            type: String,
            required: [true, 'A type is required'],
        },
        stipend: {
            type: String,
            // required: [true, 'A stipend is required'],
            default: 'N/A'
        },
        img: {
            type: String,
        },
        link: {
            type: String,
            required: [true, 'A link is required'],
        },
        location: {
            type: String,
            // required: [true, 'A country is required'],
            default: 'Multiple Locations',
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Oppurtunity = mongoose.model('Oppurtunity', opprtunityModel);

module.exports = Oppurtunity;