import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJson'
import {useParams} from 'react-router-dom'
import AppointmentNew from './AppointmentNew'

const PatientShow = (props)=>{
 const {id} = useParams()
 const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`) 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data} />
        <AppointmentNew/>
     </AxiosContainer>
 )
}
export default PatientShow
