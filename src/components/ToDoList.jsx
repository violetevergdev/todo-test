/** @format */

import ToDoItem from "./ToDoItem";

const ToDoList = ({ dispatch, todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} dispatch={dispatch} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
