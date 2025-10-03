import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
  const todoText = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoText.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoText} />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
