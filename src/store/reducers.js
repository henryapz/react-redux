import { ADD_TODO, TOGGLE_LOADER } from "./types";

const initialState = {
  todos: [],
  isLoading: false,
  message: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      //state.todos.push(1) // x
      // const newArray = [ ...state.todos ]
      // newArray.push(1)
      return {
        ...state,
        todos: action.payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
