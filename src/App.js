import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='LEar Reat' />
      <Todo text='LEar Reat2' />
      <Todo text='LEar Reat3' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
