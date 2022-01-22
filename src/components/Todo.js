function Todo(props) { 
    function  deleteHandler() {
        

    }


    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}


export default Todo

// Note:
// Props: props concept for accepting data from outside. In this case, the props accept data from App.js <Todo />
// onClick: tell the react you want to react to a click on that element
// onClick={function() {}} :  the value you assign for this attribute is not some text, not a string, but a dynamic expression (`onClick = { }`), which should hold a function, that should be executed when a click occurs.
// here we could define an anonymous function like `function () {}`
// or with the arrow `onClick={() => {}} ` ( is the same as `onClick={function() {}}`)


// Add function deleteHandler