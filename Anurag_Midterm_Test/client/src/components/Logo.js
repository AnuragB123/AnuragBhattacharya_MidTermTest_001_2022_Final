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
        <Wrapper href="localhost:5000">
            <img src={logo} width="50" height="50" alt="centennialcollege.ca" />
        </Wrapper>
    );
}
//Export Logo Function
export default Logo
