//Import necessary modules
import React, { useState } from 'react'
import api from '../api'
import styled from 'styled-components'
//Styling
const Title = styled.h1.attrs({
    className: 'h1'
})
`
    text-align: center;
    color: blue;
    background: pink;
`
const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Label = styled.label`
    margin: 5px;
    border: 1px solid;
`
const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
//Appointments Insert Function
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
                setCardNumber('');
                setVaccineSite('');
                setPriorityArea('');
                setDateTime('');
                setCancelled('');
            })
        };
        return (
        <Wrapper>
            <Title>Vaccine Appointment</Title>
            <Label>Card Number: </Label>
            <InputText
            type="text"
            placeholder="Enter Card Number"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            />
            <Label>Vaccine Site: </Label>
            <InputText
                    type="text"
                    placeholder="Enter Vaccine Site"
                    value={vaccineSite}
                    onChange={e => setVaccineSite(e.target.value)}
                />
                <Label>Priority Area: </Label>
                <InputText
                    type="text"
                    placeholder="Enter Priority Area"
                    value={priorityArea}
                    onChange={e => setPriorityArea(e.target.value)}
                />
                <Label>Date/Time: </Label>
                <InputText
                    type="date"
                    placeholder="Enter Data/Time"
                    value={dateTime}
                    onChange={e => setDateTime(e.target.value)}
                />
                <Label>Cancelled: </Label>
                <InputText
                    type="boolean"
                    placeholder="Enter Cancelled"
                    value={cancelled}
                    onChange={e => setCancelled(e.target.value)}
                />
                <Button onClick={handleAddAppointment}>Add an Appointment</Button>
                </Wrapper>
                );
            }

//Export function
export default AppointmentsInsert
