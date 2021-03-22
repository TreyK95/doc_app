import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJson'
import {useParams} from 'react-router-dom'
import Card from '../components/Card'
import LoaderAndError from '../components/LoaderAndError'
import Button from '../components/Button'
const PhysicianShow = (props)=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/physicians/${id}`) 

  // const renderForm = () => {
  //   if (createLoading || createError) {
  //     return <LoaderAndError loading={createLoading} error={createError} loaderMessage={'Creating Physician, Please Wait'}/>
  //   }
  // }
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Physicians, please wait'}>
        {data &&
        <Card header={data.name} children={data.id}/>

        }
     </AxiosContainer>
 )
}
export default PhysicianShow 