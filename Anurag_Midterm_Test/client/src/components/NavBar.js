//Import necessary modules
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
//Styling
const Container = styled.div.attrs({
    className: 'container',
})`
    height: 100px;
`
const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`
//NavBar Function
function NavBar(props){
    return (
        <Container>
            <Nav>
                <Logo />
                <Links />
            </Nav>
        </Container>
    );
}
//Export NavBar Function
export default NavBar
