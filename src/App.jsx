/** @format */

import { useState, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";
import ToDoList from "./components/ToDoList";
import AddTodo from "./components/AddTodo";
import TodoContext from "./components/TodoContext";

const initialTodos = [
  {
    id: uuidv4(),
    task: "Learn React",
    complete: true,
  },
  {
    id: uuidv4(),
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: uuidv4(),
    task: "Learn GraphQL",
    complete: false,
  },
];

const AddTodo = () => {
  const dispatch = useContext(TodoContext);
};
const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      throw new Error();
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    default:
      throw new Error();
  }
};

const App = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filterTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    } else if (filter === "COMPLETE" && todo.complete) {
      return true;
    } else if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }

    return false;
  });
  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <Filter dispatch={dispatchFilter} />
      <ToDoList todos={filterTodos} />
      <AddTodo />
    </TodoContext.Provider>
  );
};

export default App;
