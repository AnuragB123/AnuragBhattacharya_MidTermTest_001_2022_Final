//Import necessary modules
const mongoose = require('mongoose')

//Connection to the Mongoose database
mongoose
    //Database Name
    .connect('mongodb://127.0.0.1:27017/AnuragBhattacharya-appointment-db', { useNewUrlParser: true })
    //Connection error
    .catch(e => {
        console.error('Connection error', e.message)
    })

//Storing the Connection
const db = mongoose.connection
//Exporting the Connection
module.exports = db
