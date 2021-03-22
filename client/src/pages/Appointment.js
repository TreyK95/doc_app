import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
const AppointmentSingle = (props) => {
  
  const {id} = useParams()
  
  const deleteApptHandler = async () => {
    try{
      let res = await axios.delete(`/api/appointments/${id}`)
      console.log(res)
      deleteAppt(id)
    } catch(err){
      alert('error, check console')
    }
  }

  return(
    <Card>
      <CardContainer>
      <p>Appointment Date: {appointment.appointment_date}</p>
                <p>Appointment ID: {appointment.id}</p>
                <p>Physician ID: {appointment.physician_id}</p>
                <p>Patient ID: {appointment.patient_id}</p>
                <Button onClick={ApptDelete} color='red'>Delete Appt</Button>
      </CardContainer>
    </Card>
  )
}

export default AppointmentSingle
 