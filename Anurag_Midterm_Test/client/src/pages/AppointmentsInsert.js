import React, { useState } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
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

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;`

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
                <Title>Create Movie</Title>

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
                <CancelButton href={'/appointment/list'}>Cancel</CancelButton>
            </Wrapper>
        );
        }

export default AppointmentsInsert
