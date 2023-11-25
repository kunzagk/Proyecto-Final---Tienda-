import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

// Iniciar MSW solo en el entorno de desarrollo
if (process.env.NODE_ENV === 'development') {
  import('../__mocks__/browser.js').then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
