import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import "./TodoItem.scss"; // Import the SCSS file

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <div className="flex items-center">
        <span className="todo-index">{index + 1}.</span>
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="button-group">
        <button
          className="button toggle"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="button remove"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="button mark-completed"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="button mark-incomplete"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
