import FormattedMessage from "./FormattedMessage"

const ErrorMessage = ({error, fullError} ) =>{
    return (
        <FormattedMessage type='alert'>
          {fullError && <pre>{JSON.stringify(error,null,2)}</pre>}
          {/* TODO: this only works if there is a message key on error
          so down down the road we might need to more here */}
          {!fullError && <pre>{error.message}</pre>}
        </FormattedMessage>
    )
}

export default ErrorMessage