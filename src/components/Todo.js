function Todo(props) { 
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn'>Delete</button>
            </div>
        </div>
    )
}


export default Todo

// Note:
// props concept for accepting data from outside
