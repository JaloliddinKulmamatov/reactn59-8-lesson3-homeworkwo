import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../todoList/TodoList";
import FilterButtons from "../filteredButton/FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../../redux/actions";
import "./Todo.scss"; // Import the SCSS file

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="todo-app">
      <h2>Personal TODO APP</h2>
      <div className="input-group">
        <input
          id="addTodoInput"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodoClick}>
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="search-group">
          <input
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button>
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
