import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@leodev");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

  const [input, setInput] = useState("");

  // Função para adicionar uma tarefa na lista
  const handleAdd = () => {
    if (!input.trim()) return;
    setTarefas([...tarefas, input]);
    setInput("");
  };

  // Função para deletar tarefas da lista
  const handleDelete = (indexToDelete) => {
    const updatedTarefas = tarefas.filter(
      (_, index) => index !== indexToDelete,
    );
    setTarefas(updatedTarefas);
  };

  useEffect(() => {
    localStorage.setItem("@leodev", JSON.stringify(tarefas));
  }, [tarefas]);

  const tarefasMemo = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

  return (
    <section id="center">
      <div className="todo-card">
        <h1>Minhas Tarefas</h1>
        <strong className="tarefas-memo">
          {tarefasMemo
            ? `Você tem ${tarefasMemo} Tarefa${tarefasMemo > 1 ? "s" : ""}`
            : "Digite a primeira tarefa"}
        </strong>

        <div className="input-group">
          <input
            type="text"
            placeholder="Digite sua tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="button" onClick={handleAdd} disabled={!input.trim()}>
            {input.trim() ? "Adicionar" : "Bloqueado"}
          </button>
        </div>
        <ul className="task-list">
          {tarefas.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button
                type="button"
                className="btn-delete"
                onClick={() => handleDelete(index)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
