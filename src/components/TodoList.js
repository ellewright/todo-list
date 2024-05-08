"use client";

import NewInput from "./NewInput";

export default function TodoList({ todoList , onRemoveItem}) {
  return (
    <div className="list">
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item.todo} (Due date: {item.dueDate})   <button onClick={() => onRemoveItem(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
