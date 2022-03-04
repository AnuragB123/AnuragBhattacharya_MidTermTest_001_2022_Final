import React, { useState } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: blue;
background: pink
`;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 10px 30px
    border: 1px solid
    background: grey
`

const Label = styled.label`
    margin: 5px;
    
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 10px;
`

const Button = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

    function AppointmentsInsert(props) {
        const [cardNumber, setCardNumber] = useState('');
        const [vaccineSite, setVaccineSite] = useState('');
        const [priorityArea, setPriorityArea] = useState('');
        const [dateTime, setDateTime] = useState('');
        const [cancelled, setCancelled] = useState('');
        const handleAddAppointment = async (event) =>{
            const payload = { cardNumber: cardNumber, vaccineSite: vaccineSite, priorityArea: priorityArea, 
                dateTime: dateTime, cancelled: cancelled}
            await api.insertAppointment(payload).then(res => {
                window.alert(`Appointment inserted successfully`)
                setCardNumber('');
                setVaccineSite('');
                setPriorityArea('');
                setDateTime('');
                setCancelled('');
                window.location.href = `/appointment/list`;
                
            })


        };

            
        return (
            <Wrapper>
                <Title>Vaccine Appointment</Title>
                <Label>Card Number: </Label>
                <InputText
                    type="text"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                />

                <Label>Vaccine Site: </Label>
                <InputText
                    type="text"
                    value={vaccineSite}
                    onChange={e => setVaccineSite(e.target.value)}
                />

                <Label>Priority Area: </Label>
                <InputText
                    type="text"
                    value={priorityArea}
                    onChange={e => setPriorityArea(e.target.value)}
                />

                <Label>Date/Time: </Label>
                <InputText
                    type="date"
                    value={dateTime}
                    onChange={e => setDateTime(e.target.value)}
                />

                <Label>Cancelled: </Label>
                <InputText
                    type="boolean"
                    value={cancelled}
                    onChange={e => setCancelled(e.target.value)}
                />

                <Button onClick={handleAddAppointment}>Add Movie</Button>
            </Wrapper>
        );
        }

export default AppointmentsInsert
