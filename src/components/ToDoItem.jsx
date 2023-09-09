/** @format */

const ToDoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);

  const handleChangeCheckbox = () => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChangeCheckbox}
        />
        {todo.task}
      </label>
    </li>
  );
};

export default ToDoItem;
