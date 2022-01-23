
##  Props

props concept for accepting data from outside. In this case, the props accept data from `App.js <Todo />`

## onClick
tell the react you want to react to a click on that element

`onClick={function() {}}` :  the value you assign for this attribute is a dynamic expression (`onClick = { }`), which should hold a function, that should be executed when a click occurs.

Here we could define an anonymous function like `function () {}` or with the arrow `onClick={() => {}} ` ( is the same as `onClick={function() {}}`)


Add function deleteHandler, add the function as attribute in the <button> element.

## useState

- first should import useState from react. **`useState` is called react hook.** The react hooks can only be called directly in react component functions.
- Second, put it in the Todo component instead of the deleteHandler function.
- useState 初始设置为 false

- `{ modalIsOpen ? <Modal /> : null}` 这个的简短写法为  { modalIsOpen && <Modal />}
//if modalIsOpen is true(?), we render <Modal />; else (:) we don't output anything (null)


## Event Props
UI 交互描述: 
1. 点击背景 backdrop, 关闭 modal（whether confirm 的对话框.
2. click the cancel/confirm button, cancel (keep) or confirm (delete)， close modal

### 1.如果点击背景(backdrop),则关闭对话框
- create a function `closeModalHandler`, set 
`setModalIsOpen` false as default, - then point the function to the `{ modalIsOpen && <Backdrop onClick={}}`
- add closeModalHandler as **props** to the `Backdrop.js` function

### 2. 点击对话框里的cancel, 取消删除task
1. set the action for button cancel and confirm in  Modal.js. 
   - onClick={cancelHandler}
   - onClick={confirmHandler}
2. create function for the button
   ```js
       function cancelHandler (){
        props.onCancel()

    }

    function confirmHandler(){
        props.onConfirm()
    }
    ```
3. call the function in Todo.js 
```js
{ modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
```

以上动作，点击 cancel / confirm 都会关闭对话框。
以上总结：
- props are important for building reusable components
- state is import 
  - for changing what we see on the screen dynamically,
  - for adding or removing elements, for changing text on the screen, 
  - for showing or hiding an overlay
