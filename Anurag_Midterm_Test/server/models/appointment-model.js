//Import necessary modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Appointment Schema
const Appointment = new Schema(
    {
        cardNumber: { type: String, required: true },
        vaccineSite: { type: String, required: true },
        priorityArea: { type: Number, required: true },
        dateTime: {type: Date, required: true},
        cancelled: {type: Boolean, required: true}
    },
    { timestamps: true },
)
//Exporting the Model Schema
module.exports = mongoose.model('appointments', Appointment)
