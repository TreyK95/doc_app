import ErrorMessage from "./ErrorMessage"
import Loader from "./Loader"

{/* <LoaderAndError fullError loading={loading} error={error} loaderMessage={'Loading Users'}> */}
const LoaderAndError = (props) => {
    const { fullError, loading, error, loaderMessage } = props
    if(loading) return <Loader content={loaderMessage} />
    if(error) return <ErrorMessage error={error} fullError={fullError} />
    return null
}

export default LoaderAndError