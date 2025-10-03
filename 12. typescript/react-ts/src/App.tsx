// import "./App.css";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // //const todos = [new Todo("Learn raect"), new Todo("Learn ts")];
  // const onAddTodo = (text: string) => {
  //   const newTodo = new Todo(text);
  //   setTodos((prevState) => prevState.concat(newTodo));
  // };
  // const onRemoveTodo = (id: string) => {
  //   setTodos((prevState) => {
  //     return prevState.filter((todo) => todo.id !== id);
  //   });
  // };
  return (
    <>
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </>
  );
}

export default App;
