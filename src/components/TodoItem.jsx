import PropTypes from "prop-types";

const TodoItem = ({ id, name, isCompleted, onToggleTodo, onDeleteTodo }) => (
  <li>
    <span className="delete-item">
      <button type="submit" onClick={() => onDeleteTodo(id)}>
        X
      </button>
    </span>
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={() => onToggleTodo(id)}
    />
    {name}
  </li>
);

/**
 * Typechecking props
 */
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
