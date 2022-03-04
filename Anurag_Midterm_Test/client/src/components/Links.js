//Import necessary modules
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//Styling
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``
const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
//The Links to the Pages
function Links(props){
    return (
        <React.Fragment>
                <Link to="/" className="navbar-brand">
                     Vaccine Appointments
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/appointments/list" className="nav-link">
                                List Appointments
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/appointments/create" className="nav-link">
                                Create Appointments
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
    );
}
//Export Links Function
export default Links
