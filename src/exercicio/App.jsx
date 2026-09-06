import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@leodev");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTarefas([...tarefas, input]);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("@leodev", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <>
      <section id="center">
        <div>
          <ul>
            {tarefas.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="digite sua tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="button" onClick={handleAdd} disabled={!input.trim()}>
            {input ? "Adicionar" : "Digite sua tarefa"}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
