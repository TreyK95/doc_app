import FormattedMessage from "./FormattedMessage"

export default ({first_name, last_name, email})=>{
    return(
        <FormattedMessage>
            <h1>{first_name} {last_name}</h1>
            <p>{email}</p>
        </FormattedMessage>
    )
}