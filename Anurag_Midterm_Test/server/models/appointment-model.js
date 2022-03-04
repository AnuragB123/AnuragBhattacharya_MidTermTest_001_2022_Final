const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('appointments', Appointment)
