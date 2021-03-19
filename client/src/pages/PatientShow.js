import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import {useParams} from 'react-router-dom'
import Card from '../components/Card'


const PatientShow = (props)=>{
 const {id} = useParams()
 console.log(id)
 const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`)
 console.log(data)

 return (
    <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        {data &&  
        <Card header={data.name} children={data.id}/>
        }
    </AxiosContainer>
 )
}

export default PatientShow
