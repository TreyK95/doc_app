import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'

const HookDemo1 = (props)=>{
 const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3') 

 const renderData = () => {
    return data.map( d => <pre>{JSON.stringify(d, null, 1)}</pre>)
 }

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Users'}>
       {data && renderData()}
     </AxiosContainer>
 )
}

export default HookDemo1