

import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Button, Form, Select } from 'semantic-ui-react'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import LoaderAndError from '../components/LoaderAndError'




const AppointmentNew =(props) => {
  const {id} = useParams()
  const [physicianID, setPhysicianID] = useState(null)
  const [appointment, setAppointment] = useState('')
  const {data, loading, error} = useAxiosOnMount('/api/physicians')

  if (loading || error) {
    return <LoaderAndError fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'} />
  }

  const handleChange = (event, data)=> {
    setPhysicianID(data.value)
  }

  const handleSubmit = async() => {
    try {
      let res = await axios.post(`/api/appointments`, {patient_id: id, physician_id: physicianID, appointment_date: appointment})
      //refresh page here
      window.location.reload()
    } catch(err){
      alert(err)
    }
  }


  const getPhysicianOptions = () => {
    console.log(data)  
    return data.map( phys => {
        return {key: phys.name, value: phys.id, text: phys.name}
      })
  }

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input value={appointment} onChange={(e)=> setAppointment(e.target.value)} type='datetime' placeholder='Appointment date and Time' />
          </Form.Field>
          <Form.Field>
            {data &&
            <Select onChange={handleChange} placeholder='Physician Options' options={getPhysicianOptions()}/>
               }
            </Form.Field>
            <Button type='submit'>Confirm Appointment</Button>
        </Form>
      </div>
    </>
  )
  
}

export default AppointmentNew


// render under patient show page. 
// from patient show page, can create a new appointment with existing dr.
// maybe have dropdown list for existing drs to select, 
// then type out date and time. 
