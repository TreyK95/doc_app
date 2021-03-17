import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'
import List from './List'
import  Todo from './Todo'

const HookDemo2 = (props)=>{
 const {data, loading, error} = useAxiosOnMount('https://jsonplaceholder.typicode.com/todos') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Todos, please wait'}>
        <List name='Todos'
          data={data}
          renderData={(todo) => <Todo {...todo} /> }
        />
     </AxiosContainer>
 )
}

export default HookDemo2







// const RenderThing = (thing) =>
// {
// return <p>{thing.id}</p>
// }