"use client";

import { useState } from 'react'
import NewInput from "./NewInput";
import TodoList from "./TodoList";
import Header from "./Header";

export default function Home() {
  
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = (task) => {
    setTodoList([...todoList, task]);
  }

  return (
    <div>
      <Header />
      <NewInput onAddTask={handleAddTask} />
      <TodoList todoList={todoList} />
    </div>
  )
}