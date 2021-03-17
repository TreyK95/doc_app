import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'
import List from './List'
import User from './User'

const HookDemo3 = (props)=>{
 const {data, loading, error} = useAxiosOnMount('https://reqres.in/api/users?delay=3') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='USERS'
          data={data}
          renderData={(user) => <User {...user} /> }
        />
     </AxiosContainer>
 )
}

export default HookDemo3