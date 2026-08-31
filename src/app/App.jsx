import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@leodev");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Função para Salvar uma tarefa
  const handleSave = () => {
    // se o input estiver vazio não esta editando
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updatedTarefa = [...tarefas];
      updatedTarefa[editIndex] = input;
      setTarefas(updatedTarefa);
      setEditIndex(null);
    } else {
      setTarefas([...tarefas, input]);
    }

    // limpar o input no fim
    handleCancel();
  };

  // Função para deletar tarefa
  const handleDelete = (indexToDelete) => {
    const updatedTarefas = tarefas.filter(
      (_, index) => index !== indexToDelete,
    );
    setTarefas(updatedTarefas);

    if (indexToDelete === editIndex) {
      handleCancel();
    }
  };

  // Função para editar uma tarefa
  const handleEdit = (index) => {
    setInput(tarefas[index]);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setInput("");
    setEditIndex(null);
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

          <div className="div-btn">
            <button
              className="btn-salvar"
              type="button"
              onClick={handleSave}
              disabled={!input.trim()}
            >
              {editIndex !== null ? "Salvar" : "Adicionar"}
            </button>

            {editIndex !== null && (
              <button
                className="btn-cancel"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            )}
          </div>
        </div>

        <ul className="task-list">
          {tarefas.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <div>
                <button
                  className="btn-delete"
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  Excluir
                </button>
                <button
                  className="btn-edit"
                  type="button"
                  onClick={() => handleEdit(index)}
                >
                  Editar
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
