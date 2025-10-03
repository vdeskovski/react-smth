import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todoxCtx = useContext(TodosContext);
  return (
    <>
      <ul>
        {todoxCtx.items.map((item) => {
          return (
            <TodoItem
              onRemoveTodo={todoxCtx.removeTodo.bind(null, item.id)}
              text={item.text}
              key={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
