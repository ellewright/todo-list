export default function Home() {
    return (
      <div>
        <div className="header">
          <h1>To-Do List</h1>
        </div>
        <div className="new-input">
          <div className="input-field">
            <input type="text" placeholder="Purchase groceries..."></input>
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="list"></div>
      </div>
    )
  }