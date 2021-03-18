import useAxiosOnMount from "../hooks/useAxiosOnMount"
import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"
import { Link } from "react-router-dom"
import CardContainer from "../components/CardContainer"

const Physicians = (props)=>{
  const {data,loading, error} = useAxiosOnMount(`/api/physicians`)
  return (
      <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Physicians, please wait'}>
         <List name='Physicians'
           data={data}
           renderData={(physician)=> { 
           return(
               <Link to={`/physicians/${physician.id}`}>
                 <CardContainer>
                     <p>{physician.name}</p>
                 </CardContainer>
               </Link>
           )} 
         }
         />
      </AxiosContainer>
  )
 }

export default Physicians