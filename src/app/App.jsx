import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { toast } from "react-toastify";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@leodev");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState(null);

  // Função para Salvar uma tarefa
  const handleSave = (e) => {
    e.preventDefault();

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

    toast.success("Salvo com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // limpar o input no fim
    handleCancel();
  };

  const handleOpenModal = (index) => {
    setTaskToDeleteIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setTaskToDeleteIndex(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (taskToDeleteIndex !== null) {
      const updatedTarefas = tarefas.filter(
        (_, index) => index !== taskToDeleteIndex,
      );

      setTarefas(updatedTarefas);

      if (taskToDeleteIndex === editIndex) {
        handleCancel();
      }
    }
    handleCloseModal();
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

        <form onSubmit={handleSave} className="input-group">
          <input
            type="text"
            placeholder="Digite sua tarefa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="div-btn">
            <button
              className="btn-salvar"
              type="submit"
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
        </form>
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            {/* O stopPropagation impede que o modal feche se você clicar dentro da caixinha branca */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Excluir Tarefa?</h2>
              <p>
                Você tem certeza que deseja deletar esta tarefa? Esta ação não
                poderá ser desfeita.
              </p>

              <div className="modal-buttons">
                <button
                  className="btn-confirmar-modal"
                  onClick={handleConfirmDelete}
                >
                  Sim, excluir
                </button>
                <button
                  className="btn-cancelar-modal"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        <ul className="task-list">
          {tarefas.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <div>
                <button
                  className="btn-delete"
                  type="button"
                  onClick={() => handleOpenModal(index)}
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
