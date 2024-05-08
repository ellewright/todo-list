"use client";

import { useState } from 'react';
import NewInput from "./NewInput";
import TodoList from "./TodoList";
import Header from "./Header";

export default function Home() {
  
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo]);
  }

  const handleRemoveItem = (idx) => {
    const updatedList = [...todoList];
    updatedList.splice(idx, 1);
    setTodoList(updatedList);
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <NewInput onAddTodo={handleAddTodo}/>
      <TodoList todoList={todoList} onRemoveItem={handleRemoveItem} />
    </div>
  )
}