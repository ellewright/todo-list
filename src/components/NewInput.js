"use client";

import { useState } from "react";
import TodoList from "./TodoList";

export default function NewInput({onAddTodo}) {
    
    const [todo, setTodo] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTodoNameChange = (e) => {
        setTodo(e.target.value);
    }

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    }

    const handleAddItem = () => {
        if (todo.trim() !== '' && dueDate !== '') {
            onAddTodo({todo: todo, dueDate: dueDate});
            setTodo('');
            setDueDate('');
        }
    }

    return (
        <div className="new-input">
            <div className="input-field">
                <input type="text" value={todo} onChange={handleTodoNameChange} placeholder="Purchase groceries..."></input>
                <input type="date" value={dueDate} onChange={handleDueDateChange} />
            </div>
            <div className="submit-button">
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}