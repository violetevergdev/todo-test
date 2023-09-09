/** @format */

const AddTodo = ({ dispatch }) => {
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
