import Button from "../components/Button"
import React, {useState} from 'react'

const NewPhysicianForm = () => {
  const [physician, setPhysician]= useState('')
  const {addPhysician} = ('')
  const [name] = useState('')
  const handleSubmit= (p) => {
    this.preventDefault()

    addPhysician({name: name})


    return (
      <div>
        <h1>Add Physician</h1>
        <form onSubmit={handleSubmit}>
          <input
          value={name}
          onChange={(p)=>{setPhysician(p.target.value)}}
          />
          <Button type='submit'>Add Physician</Button>
          {/* <Button onClick={()=>history.push(`/api/physicians/${physicians_id}`)}>Cancel</Button> */}

        </form>
      </div>
    )

  }
}

export default NewPhysicianForm