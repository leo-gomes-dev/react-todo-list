import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState(["task 1", "task 2", "task 3"]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTarefa([...tarefa, input]);
    setInput("");
  };
  return (
    <>
      <section id="center">
        <div>
          <ul>
            {tarefa.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="digite sua tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
