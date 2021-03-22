import useAxiosOnMount from "../hooks/useAxiosOnMount"
import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"
import { Link } from "react-router-dom"
import CardContainer from "../components/CardContainer"
import NewPhysicianForm from "./NewPhysicianForm"
import Button from "../components/Button"
import { useState } from "react"
import LoaderAndError from "../components/LoaderAndError"

const Physicians = (props)=>{
  const {data,loading, error} = useAxiosOnMount(`/api/physicians`)
  const [createLoading, setCreateLoading] = useState(false)
  const [createError, setCreateError] = useState(null)
  const [show, setShow] = useState(false)

  const renderForm = () => {
    if (createLoading || createError) {
      return <LoaderAndError loading={createLoading} error={createError} loaderMessage={'Creating Physician, Please Wait'}/>
    }
  }
  return (
      <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Physicians, please wait'}>
        <Button onclick={() => setShow(!show)}>Add Physician</Button>
        {show && 
        <div>
          <p>Add Physician here</p>
          {renderForm()}
        </div>
        }
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