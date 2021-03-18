import AxiosContainer from "../components/AxiosContainer"
import List from "../components/List"
import useAxiosOnMount from "../hooks/useAxiosOnMount"

const Appointments = (props) => {
  const {data, loading, error} = useAxiosOnMount('/api/appointments')

  return (
    <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Appointments'
        data={data}
        />
    </AxiosContainer>
  )
}

export default Appointments