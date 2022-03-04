const express = require('express')

const AppointmentCtrl = require('../controllers/appointment-ctrl')

const router = express.Router()

router.post('/appointment', AppointmentCtrl.createAppointment)
router.delete('/appointment/:id', AppointmentCtrl.deleteAppointment)
router.get('/appointments', AppointmentCtrl.getAppointments)

module.exports = router
