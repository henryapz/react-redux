import { ADD_TODO, TOGGLE_LOADER } from "./types";

//action creator

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleLoader = (status) => ({
  type: TOGGLE_LOADER,
  payload: status,
});
