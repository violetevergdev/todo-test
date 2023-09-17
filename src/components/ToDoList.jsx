/** @format */

import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
