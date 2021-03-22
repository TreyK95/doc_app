import axios from "axios"
import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"
import AxiosContainer from "../components/AxiosContainer"
import CardContainer from "../components/CardContainer"
import List from "../components/List"
import useAxiosOnMount from "../hooks/useAxiosOnMount"
import {useState} from 'react'
import AppointmentSingle from './Appointment'

const Appointments = (props) => {
  const {data, loading, error} = useAxiosOnMount('/api/appointments')
  const [appts, setAppts] = useState([])

//  const deleteAppt = (deleteID) => {
//    const filterAppts = appointments.filter(x => x.id !=deleteID)
//    setAppts(filterAppts)
//  }



  return (
    <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Appointments'
        data={data}
        renderData={(appointment)=> {
          return(
            <Link to={`appointments/${appointment.id}`}>
              <CardContainer>
                <p>Appointment Date: {appointment.appointment_date}</p>
                <p>Appointment ID: {appointment.id}</p>
                <p>Physician ID: {appointment.physician_id}</p>
                <p>Patient ID: {appointment.patient_id}</p>
                {/* <Button onClick={ApptDelete} color='red'>Delete Appt</Button> */}
              </CardContainer>
            </Link>
          )
        }}
        />
    </AxiosContainer>
  )
}

export default Appointments