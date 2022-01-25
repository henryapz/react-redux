import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

// import { getTodos } from '../lib/todoServices'

import { addTodo, toggleLoader } from "../store/actions";

const List = [
  { id: 1, isCompleted: false, name: "Levantarse" },
  { id: 2, isCompleted: false, name: "Comer" },
  { id: 3, isCompleted: false, name: "Metoria" },
  { id: 4, isCompleted: false, name: "Dormir" },
];

const TodoList = ({ filter }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const toogleElement = (id, value = false) => {
    let newState = todos.map((element) => {
      return element.id === id ? { ...element, isCompleted: value } : element;
    });
    dispatch(addTodo(newState));
  };

  const onToggleTodo = (id) => {
    console.log("onToggleTodo", id);
    toogleElement(id, true);
  };

  const onDeleteTodo = (id) => {
    console.log("onDeleteTodo", id);
    toogleElement(id, false);
  };

  useEffect(() => {
    dispatch(toggleLoader(true));
    dispatch(addTodo(List));
    dispatch(toggleLoader(false));
  }, []);

  useEffect(() => {
    if (filter === "completed") {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [filter]);

  return (
    <div className="Todo-List">
      <ul>
        {todos
          .filter((i) => i.isCompleted === isCompleted)
          .map((elem) => (
            <TodoItem
              key={elem.id}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
              {...elem}
            />
          ))}
      </ul>
    </div>
  );
};

/**
 * Typechecking props
 */
TodoList.propTypes = {
  filter: PropTypes.string,
};

TodoList.defaultProps = {
  filter: null,
};

export default TodoList;
