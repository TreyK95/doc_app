import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxiosOnMount = (url) => {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   // mount
   useEffect(()=>{
       getData()
   },[])
   const getData = async()=>{
       try{
         let res = await axios.get(url)
         console.log(res.data)
         // if res comes back as something other than res.data or res.data.data
         // this will break not 100%
         setData(res.data.data ? res.data.data : res.data)
         setLoading(false)
       } catch(err){
           setError(err)
           setLoading(false)
       }
   }
   return { data: data, loading: loading, error:error}
   
}

export default useAxiosOnMount