import { Link } from "react-router-dom"
import AxiosContainer from "../components/AxiosContainer"
import CardContainer from "../components/CardContainer"
import List from "../components/List"
import useAxiosOnMount from "../hooks/useAxiosOnMount"

const Appointments = (props) => {
  const {data, loading, error} = useAxiosOnMount('/api/appointments')

  return (
    <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Appointments'
        data={data}
        renderData={(appointment)=> {
          return(
            <Link to={`appointments/${appointment.id}`}>
              <CardContainer>
                <p>Appointment Date: {appointment.appointment_date}</p>
                <p>Physician ID: {appointment.physician_id}</p>
                <p>Patient ID: {appointment.patient_id}</p>
              </CardContainer>
            </Link>
          )
        }}
        />
    </AxiosContainer>
  )
}

export default Appointments