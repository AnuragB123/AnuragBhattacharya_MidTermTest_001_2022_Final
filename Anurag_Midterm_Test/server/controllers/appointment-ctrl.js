//Imports the Appointment Model
const Appointment = require('../models/appointment-model')
//Create a new Appointment object
createAppointment = (req, res) => {
    //Body of the React Client
    const body = req.body
    //Error Handling
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an appointment',
        })
    }

    //New Appointment Object
    const appointment = new Appointment(body)

    //Error
    if (!appointment) {
        return res.status(400).json({ success: false, error: err })
    }

    //Saving an Appointment Object to the Database
    appointment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Appoitment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Appointment not created!',
            })
        })
}

//Deleting Appointment Object
deleteAppointment = async (req, res) => {

    await Appointment.findOneAndDelete({ _id: req.params.id }, (err, appointment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!appointment) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }
        return res.status(200).json({ success: true, data: appointment })
    }).catch(err => console.log(err))
}

//Get All Appointments List
getAppointments = async (req, res) => {
    await Appointment.find({}, (err, appointments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!appointments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Appointment not found` })
        }
        return res.status(200).json({ success: true, data: appointments })
    }).catch(err => console.log(err))
}

//Exporting All Functions
module.exports = {
    createAppointment,
    deleteAppointment,
    getAppointments
}
