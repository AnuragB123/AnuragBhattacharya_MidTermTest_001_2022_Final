import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import AppointmentsList from '../pages/AppointmentsList'
import AppointmentsInsert from '../pages/AppointmentsInsert'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/appointments/list" exact component={AppointmentsList} />
                <Route path="/appointments/create" exact component={AppointmentsInsert} />
            </Switch>
        </Router>
    )
}

export default App
