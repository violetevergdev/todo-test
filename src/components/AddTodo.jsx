/** @format */
import { useState, useReducer, useContext } from "react";

const AddTodo = ({ dispatch }) => {
  const dispatch = useContext(TodoContext);

  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    if (task) {
      dispatch({
        type: "ADD_TODO",
        task,
        id: uuidv4(),
      });
    }
    setTask("");
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChangeInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
