import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) { 
    const [ modalIsOpen, setModalIsOpen] = useState(false);

    function  deleteHandler() {
        setModalIsOpen(true);

    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal />}
            { modalIsOpen && <Backdrop/>}
        </div>
    )
}


export default Todo

// Note:
// Props: props concept for accepting data from outside. In this case, the props accept data from App.js <Todo />
// onClick: tell the react you want to react to a click on that element
// onClick={function() {}} :  the value you assign for this attribute is a dynamic expression (`onClick = { }`), which should hold a function, that should be executed when a click occurs.
// here we could define an anonymous function like `function () {}`
// or with the arrow `onClick={() => {}} ` ( is the same as `onClick={function() {}}`)


// Add function deleteHandler

//useState, first should import useState from react. useState is called react hook. The react hooks can only be called directly in react component functions.
//Second, put it in the Todo component instead of the deleteHandler function.
// useState 初始设置为 false

// `{ modalIsOpen ? <Modal /> : null}` 这个的简短写法为  { modalIsOpen && <Modal />}
//if modalIsOpen is true(?), we render <Modal />; else (:) we don't output anything (null)
// 