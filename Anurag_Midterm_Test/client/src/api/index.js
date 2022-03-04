import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertAppointment = payload => api.post(`/appointment`, payload)
export const getAllAppointments = () => api.get(`/appointments`)
export const deleteAppointmentById = id => api.delete(`/appointment/${id}`)

const apis = {
    insertAppointment,
    getAllAppointments,
    deleteAppointmentById,
}

export default apis
