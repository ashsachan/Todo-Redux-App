import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Todo App Using React and Redux</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
