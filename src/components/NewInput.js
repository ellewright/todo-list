"use client";

import { useState } from "react";
import TodoList from "./TodoList";

export default function NewInput({onAddTask}) {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            onAddTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <div className="new-input">
            <div className="input-field">
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Purchase groceries..."></input>
            </div>
            <div className="submit-button">
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}