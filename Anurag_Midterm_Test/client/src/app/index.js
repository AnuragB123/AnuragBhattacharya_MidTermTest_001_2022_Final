//Import necessary modules
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import AppointmentsList from '../pages/AppointmentsList'
import AppointmentsInsert from '../pages/AppointmentsInsert'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

//Application Switch of the 2 pages of the Application, List Appointments and Create Appointments
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/appointments/list" exact component={AppointmentsList} />
                <Route path="/appointments/create" exact component={AppointmentsInsert} />
            </Switch>
            <p>This application allows User to create a new Appointment, list all Appointments and Delete an Appointment</p>
        </Router>
    )
}
//Export App Function
export default App
