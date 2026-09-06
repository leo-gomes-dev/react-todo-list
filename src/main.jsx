import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import App from "./app/App.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <App />
    </main>
    <Footer />
  </StrictMode>,
);
