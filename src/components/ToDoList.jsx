/** @format */

import ToDoItem from "./ToDoItem";

const ToDoList = ({ dispatch, todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
