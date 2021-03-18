import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJson'
import {useParams} from 'react-router-dom'
const PhysicianShow = (props)=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/physicians/${id}`) 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data}/>
     </AxiosContainer>
 )
}
export default PhysicianShow 