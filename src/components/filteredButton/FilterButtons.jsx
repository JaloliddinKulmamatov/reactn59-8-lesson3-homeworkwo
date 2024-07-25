import React from "react";
import "./Filter.scss"

import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../../redux/actions";
const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="filter-buttons">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button onClick={() => dispatch(markAllCompleted())}>
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
