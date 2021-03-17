const Todo = ({title, complete}) => {
    return (
        <div>
            <h1>{title}</h1>
            {complete? 'DONE' : "NOT DONEs"}
        </div>
    )
}

export default Todo