import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import "./index.css";
import App from "./app/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </StrictMode>,
);
