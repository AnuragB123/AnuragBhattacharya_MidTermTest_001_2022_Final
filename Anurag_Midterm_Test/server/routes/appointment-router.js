//Import necessary modules
const express = require('express')
const AppointmentCtrl = require('../controllers/appointment-ctrl')
//Router for the CRUD operations
const router = express.Router()
//POST, DELETE and GET Operations
router.post('/appointment', AppointmentCtrl.createAppointment)
router.delete('/appointment/:id', AppointmentCtrl.deleteAppointment)
router.get('/appointments', AppointmentCtrl.getAppointments)
//Exports the Router Function
module.exports = router
