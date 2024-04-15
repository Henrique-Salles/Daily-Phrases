import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [phrase, setPhrase] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const allPhrases = [
    {
      id: 1,
      categoria: "Motivação",
      frases: [
        "Hoje você tem a oportunidade de construir o amanhã que você deseja.",
        "Sonhe sem medos, viva sem limites.",
        "Se o plano não funciona, mude o plano, não a meta.",
        "Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.",
        "A luz só ilumina na escuridão, por isso faça de toda escuridão uma oportunidade de brilhar.",
        "Não se conforme com o que você precisa, lute pelo que você merece.",
        "A disciplina é a mãe do êxito.",
      ],
    },
    {
      id: 2,
      categoria: "Bom Dia",
      frases: [
        "Um lindo dia, começando com café da manhã, música, boas energias, bom humor, pessoas de bem e gratidão.",
        "Hoje é um lindo dia para espalhar sorrisos, colher vitórias e desfrutar de tudo que é bom neste mundo. Tenha um bom dia!",
        "Bom dia! Que Deus seja a sua fortaleza para este dia especial.",
        "Inicie seu dia com muita positividade e amor... amor pelo que faz, amor pelos que te cercam e, principalmente, amor por si mesmo!",
        "Que hoje seja um dia repleto de alegria, sorrisos e conquistas.",
        "Um dia de luz, uma tarde de paz e uma noite de alegria é o que desejo para você nesta manhã especial.",
        "Que a paz invada o seu coração neste dia especial e abençoado pelo nosso Senhor Jesus Cristo. Tenha um ótimo dia!",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setSelectedCategory(index);
  }

  function showPhrase() {
    let randomNumber = Math.floor(
      Math.random() * allPhrases[selectedCategory].frases.length
    );
    setPhrase(`"${allPhrases[selectedCategory].frases[randomNumber]}"`);
  }

  return (
    <div className="container">
      <img src={logoImg} alt="Logo Frases" className="logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allPhrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.categoria === allPhrases[selectedCategory].categoria
                  ? 2
                  : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.categoria}
          </button>
        ))}
      </section>

      <button className="phrase-button" onClick={showPhrase}>
        Gerar Frase
      </button>

      {phrase !== "" && <p className="phrase">{phrase}</p>}
    </div>
  );
}

export default App;
