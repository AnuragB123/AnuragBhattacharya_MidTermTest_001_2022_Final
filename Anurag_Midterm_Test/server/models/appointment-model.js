//Import necessary modules
const mongoose = require('mongoose')
//Create a new Schema
const Schema = mongoose.Schema

//Appointment Schema
const Appointment = new Schema(
    {
        //CardNumber property
        cardNumber: { type: String, required: true },
        //VaccineSite property
        vaccineSite: { type: String, required: true },
        //PriorityArea property
        //I was unable to figure the validation for this property as required
        priorityArea: { type: Number, required: true },
        //DateTime property
        dateTime: {type: Date, required: true},
        //Cancelled property
        cancelled: {type: Boolean, required: true}
    },
    //Timestamp, when the object is created
    { timestamps: true },
)
//Exporting the Model Schema
module.exports = mongoose.model('appointments', Appointment)
