import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

function DeleteAppointment(props) {
const    deleteApp = (event) => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the appointment ${props.id} permanently?`,
            )
        ) {
            api.deleteAppointmentById(props.id)
            window.location.reload()
        }
    }
    return (<Delete onClick={deleteApp}>Delete</Delete>);
}

function AppointmentsList(props){
    const [appointments, setAppointments] = useState([]);
  
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
        

        setLoading(true);

        await api.getAllAppointments().then(result => {
            setAppointments(result.data.data);
            setLoading(false);

        }).catch((error) => {
            console.log('error in fetchData:', error)
          });
        };  
        fetchData();

    },[]);

    const columns = [
        {
            Header: 'ID',
            accessor: '_id',
            filterable: true,
        },
        {
            Header: 'Card Number',
            accessor: 'cardNumber',
            filterable: true,
        },
        {
            Header: 'Vaccine Site',
            accessor: 'vaccineSite',
            filterable: true,
        },
        {
            Header: 'Priority Area',
            accessor: 'priorityArea',
            filterable: true,
        },
        {
            Header: 'Date/Time',
            accessor: 'dateTime',
            filterable: true,
        },
        {
            Header: 'Cancelled',
            accessor: 'cancelled',
            filterable: true,
        },
        {
            Header: '',
            accessor: '',
            Cell: function(props) {
                return (
                    <span>
                        <DeleteAppointment id={props.original._id} />
                    </span>
                )
            },
        },
    ]


    let showTable = true
    if (!appointments.length) {
        showTable = false
    }

    return (
        <Wrapper>
        {showTable && (
            <ReactTable
                data={appointments}
                columns={columns}
                loading={isLoading}
                defaultPageSize={10}
                showPageSizeOptions={true}
                minRows={0}
            />
        )}
    </Wrapper>
    )
}


export default AppointmentsList
