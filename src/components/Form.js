import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  // Here i can write javascript code and function.

  const InputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      //inputText,
      { text: inputText, completed: false, id: todos.length },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={InputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
