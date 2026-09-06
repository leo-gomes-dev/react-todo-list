# 🚀 Gerenciador de Tarefas – LeoGomes.dev

Uma aplicação de lista de tarefas (To-Do List) moderna, rápida e minimalista, desenvolvida para fins de organização pessoal e consolidação de conceitos essenciais do ecossistema React.

## 📱 Demonstração do Projeto
O layout conta com uma interface totalmente em **Dark Mode**, cantos arredondados, transições suaves, validações de segurança nos botões e total responsividade para dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **React** (Biblioteca SPA)
- **Vite** (Build Tool ultra rápida)
- **JavaScript (ES6+)**
- **CSS3** (Variáveis nativas/Design Tokens e Flexbox)
- **LocalStorage API** (Persistência no navegador)

---

## ⚙️ Funcionalidades Implementadas

- **Lazy State Initialization:** O estado inicial das tarefas busca as informações diretamente do LocalStorage na inicialização, evitando telas piscando ou reescritas acidentais.
- **CRUD Completo:**
  - **C**reate: Adicionar novas tarefas com bloqueio de inputs vazios (`.trim()`).
  - **R**ead: Listagem dinâmica renderizada com chaves (`key`) únicas baseadas em ID temporal (`Date.now()`).
  - **U**pdate: Edição em tempo real mudando o comportamento do formulário e botão principal.
  - **D**elete: Remoção cirúrgica de itens usando filtragem de arrays.
- **Toggle Complete:** Clique no texto da tarefa para alternar o status de conclusão (aplica efeito visual riscado e bloqueia o botão de edição).
- **Componentização Avançada:** Estrutura organizada em subpastas com escopos isolados de estilo para `header` e `footer`.

---

## 📁 Estrutura de Pastas do Projeto

O projeto adota uma arquitetura modular por componentes (Pattern de pastas isoladas), estruturada da seguinte forma:

```text
react/
 ├── public/
 └── src/
      ├── app/
      │    ├── App.jsx
      │    └── App.css
      ├── components/
      │    ├── footer/
      │    │    ├── Footer.jsx
      │    │    └── Footer.css
      │    └── header/
      │         ├── Header.jsx
      │         └── Header.css
      ├── index.css
      └── main.jsx
```

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/leo-gomes-dev/react-todo-list.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd react
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

---

## 📝 Notas de Desenvolvimento

O app utiliza a chave `@leodev` para salvar as informações em formato JSON dentro do armazenamento local do navegador. Caso precise resetar a aplicação completamente para testes de estado vazio, basta rodar `localStorage.clear()` no console do desenvolvedor (F12).

---
Desenvolvido com 💜 por [Leo Gomes Developer](https://leogomesdev.com)
