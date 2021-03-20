import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import {useParams} from 'react-router-dom'
import AppointmentNew from './AppointmentNew'
import Card from '../components/Card'
import StringifyJson from '../components/StringifyJson'


const PatientShow = (props)=>{
 const {id} = useParams()
 console.log(id)
 const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`)
 console.log(data)

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data} />
        <AppointmentNew/>
     </AxiosContainer>
 )
}

export default PatientShow
