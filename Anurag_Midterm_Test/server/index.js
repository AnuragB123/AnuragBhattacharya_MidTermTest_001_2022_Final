//Import necessary modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const appointmentRouter = require('./routes/appointment-router')
const app = express()
const apiPort = 3000
//Different packages the server application will use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
//MongoDB Connection Error
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
//The Server is Running
app.get('/', (req, res) => {
    res.send('Server is Running')
})
//Getting the Appointment
app.use('/api', appointmentRouter)
//Listening to the API Port specified
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
