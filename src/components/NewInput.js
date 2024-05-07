export default function NewTodo() {
    return (
        <div className="new-input">
            <div className="input-field">
                <input type="text" placeholder="Purchase groceries..."></input>
            </div>
            <div className="submit-button">
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}