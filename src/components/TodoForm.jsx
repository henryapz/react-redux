const TodoForm = () => {
  const handleInputChange = (evt) => {
    const val = evt.target.value;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
    </form>
  );
};

export default TodoForm;
