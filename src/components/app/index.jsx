import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/index";
import Input from "../input/index";
import TodoItem from "../todo-item/index";
import { addTodo, deleteTodo, toggleTodo } from "../../redux/todo/actions";
import { getTodos } from "../../redux/todo/selectors";
import { getActiveFilter } from "../../redux/filter/selectors";
import { filterTodo } from "../../redux/filter/actions";
import { TYPE_OF_FILTER } from "../../redux/filter/reducer";
import styles from "./styles.module.scss";
import FilterBtns from "../filter";

function App() {
  const todos = useSelector(getTodos);
  const activeFilter = useSelector(getActiveFilter);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const strategyToGetTodosByFilter = {
    [TYPE_OF_FILTER.SHOW_ALL]: todos,
    [TYPE_OF_FILTER.SHOW_ACTIVE]: todos.filter((todo) => !todo.isCompleted),
    [TYPE_OF_FILTER.SHOW_COMPLETED]: todos.filter((todo) => todo.isCompled),
  };

  const filteredTodos = activeFilter
    ? strategyToGetTodosByFilter[activeFilter]
    : todos;

  const handleClickAddButton = (e) => {
    e.preventDefault();
    const trimedValue = inputValue.trim();
    if (trimedValue !== "") {
      dispatch(addTodo(trimedValue));
      setInputValue("");
    }
  };

  

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const renderTodoItem = (todo, idx) => {
    return (
      <TodoItem
        key={todo.id}
        isComplete={todo.isComplete}
        text={todo.text}
        onClick={() => handleToggleTodo(todo.id)}
        onDelete={() => handleDeleteTodo(todo.id)}
      />
    );
  };

  const filterTodos = (todos, filter) => {
    if (filter === TYPE_OF_FILTER.SHOW_ALL) {
      return todos;
    }
    if (filter === TYPE_OF_FILTER.SHOW_ACTIVE) {
      return todos.filter((todo) => !todo.isComplete);
    }
    if (filter === "SHOW_COMPLETED") {
      return todos.filter((todo) => todo.isComplete);
    }
    return todos;
  };

  return (
    <div className={styles["container"]}>
      <h1>TODO</h1>
      <div className={styles["todo-list-wrap"]}>
        <div>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onSubmit={handleClickAddButton}
          />
        </div>

        <div className={styles["todo-list"]}>
          {filterTodos(todos, activeFilter).map(renderTodoItem)}
          {todos.length ? (
            <FilterBtns />
          ) : (
           ''
          )}
        </div>

        <div className={"filter-button"}></div>
      </div>
    </div>
  );
}

export default App;
