import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (_id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => prevState.concat(newTodo));
  };
  const onRemoveTodo = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodo,
    removeTodo: onRemoveTodo,
  };
  return (
    <>
      <TodosContext.Provider value={contextValue}>
        {props.children}
      </TodosContext.Provider>
    </>
  );
};

export default TodosContextProvider;
