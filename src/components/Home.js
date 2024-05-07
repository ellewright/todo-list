import NewInput from "./NewInput";
import TodoList from "./TodoList";
import Header from "./Header";

export default function Home() {
    return (
      <div>
        <Header />
        <NewInput />
        <TodoList />
      </div>
    )
  }