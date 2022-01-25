import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Message from "./components/Message";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import "./App.css";

const RenderView = (props) => {
  console.log(filter);

  return <TodoList filter={match.params.filter} />;
};

const App = () => (
  <div className="App">
    <header className="App-header">Todo List</header>
    <BrowserRouter>
      <div className="Todo-App">
        <Message />
        <Loader />
        <TodoForm />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/active" element={<TodoList filter="pending" />} />
          <Route path="/completed" element={<TodoList filter="completed" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

/**
 * Typechecking props
 */
RenderView.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default App;
