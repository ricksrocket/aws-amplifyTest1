//app.jsx
import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => { 
    const savedTodos = localStorage.getItem("ITEMS");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newItem) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  }

  function toggleTodo(completed, id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
