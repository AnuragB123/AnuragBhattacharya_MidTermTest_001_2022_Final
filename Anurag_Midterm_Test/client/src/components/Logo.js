//Import necessary modules
import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'
//Styling
const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``
//Logo Function
function Logo(props){
    return (
        //Go to Home Page
        <Wrapper href="localhost:5000">
            <img src={logo} width="50" height="50" alt="homePage" />
        </Wrapper>
    );
}
//Export Logo Function
export default Logo
