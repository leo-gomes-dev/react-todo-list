import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@leodev");
    if (tarefasStorage) {
      const parsed = JSON.parse(tarefasStorage);
      // Garante retrocompatibilidade se os dados antigos forem apenas strings
      return parsed.map((task, index) =>
        typeof task === "string"
          ? { id: index, text: task, completed: false }
          : task,
      );
    }
    return [];
  });

  const [input, setInput] = useState("");

  // ESTADOS DE EDIÇÃO
  const [editId, setEditId] = useState(null);

  const handleSave = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      // Caso esteja EDITANDO uma tarefa existente
      const updated = tarefas.map((task) =>
        task.id === editId ? { ...task, text: input } : task,
      );
      setTarefas(updated);
      setEditId(null); // Sai do modo de edição
    } else {
      // Caso esteja ADICIONANDO uma nova tarefa
      const newTask = {
        id: Date.now(), // Gera um ID único baseado no tempo
        text: input,
        completed: false,
      };
      setTarefas([...tarefas, newTask]);
    }

    setInput("");
  };

  // Ativa o modo de edição levando o texto de volta para o input
  const handleEdit = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  // Alterna o status de concluído (riscado)
  const handleToggleComplete = (id) => {
    const updated = tarefas.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTarefas(updated);
  };

  const handleDelete = (idToDelete) => {
    const updatedTarefas = tarefas.filter((task) => task.id !== idToDelete);
    setTarefas(updatedTarefas);

    // Se deletar a tarefa que estava sendo editada, cancela a edição
    if (editId === idToDelete) {
      setEditId(null);
      setInput("");
    }
  };

  // Cancela a edição atual sem salvar
  const handleCancelEdit = () => {
    setEditId(null);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("@leodev", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <section id="center">
      <div className="todo-card">
        <h1>Minhas Tarefas</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder={
              editId !== null ? "Editando tarefa..." : "Digite sua tarefa..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="button" onClick={handleSave} disabled={!input.trim()}>
            {editId !== null ? "Salvar" : "Adicionar"}
          </button>

          {editId !== null && (
            <button
              type="button"
              className="btn-cancel"
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
          )}
        </div>

        <ul className="task-list">
          {tarefas.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <span
                onClick={() => handleToggleComplete(task.id)}
                className="task-text"
              >
                {task.text}
              </span>

              <div className="task-actions">
                <button
                  type="button"
                  className="btn-edit"
                  onClick={() => handleEdit(task)}
                  disabled={task.completed} // Impede editar tarefas já concluídas
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => handleDelete(task.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
