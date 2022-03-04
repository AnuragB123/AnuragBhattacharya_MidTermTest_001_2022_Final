//Import necessary modules
import axios from 'axios'
//API Url
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

//Export the Neccessary Functions
export const insertAppointment = payload => api.post(`/appointment`, payload)
export const getAllAppointments = () => api.get(`/appointments`)
export const deleteAppointmentById = id => api.delete(`/appointment/${id}`)

//APIs needed for the React Client
const apis = {
    //InsertAppointment API Function
    insertAppointment,
    //GetAllAppointments API Function
    getAllAppointments,
    //DeleteAppointment API Function
    deleteAppointmentById,
}
//Export All API Functions
export default apis
