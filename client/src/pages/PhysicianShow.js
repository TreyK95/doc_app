import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJson'
import {useParams} from 'react-router-dom'
import Card from '../components/Card'
const PhysicianShow = (props)=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/physicians/${id}`) 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Physicians, please wait'}>
        {data &&
        <Card header={data.name} children={data.id}/>
        }
     </AxiosContainer>
 )
}
export default PhysicianShow 