import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <img src={logoImg} alt="Logo Frases" className="logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        <button className="category-button">Motivação</button>
        <button className="category-button">Bem Estar</button>
      </section>

      <button className="phrase-button">Gerar Frase</button>

      <p className="phrase">Alguma frase</p>
    </div>
  );
}

export default App;
