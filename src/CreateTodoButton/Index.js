import './CreateTodoButton.css';
import '../TodoContext/Index';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };