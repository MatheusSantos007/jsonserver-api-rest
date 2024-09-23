import React from "react"; // Importa React
import ReactDOM from "react-dom"; // Importa ReactDOM para manipulação do DOM
import App from "./App"; // Importa o componente App

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App dentro do modo estrito do React */}
  </React.StrictMode>,
  document.getElementById("root") // Seleciona o elemento com id "root" no DOM para renderizar o App
);
