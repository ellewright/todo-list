"use client";

import NewInput from "./NewInput";

export default function TodoList({todoList}) {
    return (
        <div className="list">
            <ul>
                {todoList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
