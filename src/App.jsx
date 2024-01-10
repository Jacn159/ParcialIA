// App.jsx
import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  const initialCards = [
    { texto: 1, clase: "posicion-1" },
    { texto: 2, clase: "posicion-2" },
    { texto: 3, clase: "posicion-3" },
    { texto: 4, clase: "posicion-4" },
    { texto: 5, clase: "posicion-5" },
    { texto: 6, clase: "posicion-6" },
    { texto: 7, clase: "posicion-7" },
    { texto: 8, clase: "posicion-8" },
    { texto: 9, clase: "posicion-9" },
  ];

  const [cards, setCards] = useState(initialCards);

  const handleCardClick = (clickedCard) => {
    const emptyCard = cards.find((card) => card.texto === 9);
    console.log(emptyCard);
    // Verifica si la tarjeta clicada es adyacente a la tarjeta vacía
    if (isAdjacent(emptyCard, clickedCard)) {
      const newCards = cards.map((card) =>
        card.texto === clickedCard.texto
          ? { ...card, clase: emptyCard.clase }
          : card.texto === 9
          ? { ...card, clase: clickedCard.clase }
          : card
      );

      setCards(newCards);
    }
  };
  //aqui es la logica
  const isAdjacent = (emptyCard, clickedCard) => {
    //, traigo el las coordenadas del lugar vacío,
    const emptyRow = Math.floor(emptyCard.texto / 3);
    const emptyCol = emptyCard.texto % 3;
    console.log(emptyRow + "; " + emptyCol);
    //traigo las coordenadas de la caja clickeada
    const clickedRow = Math.floor(clickedCard.texto / 3);
    const clickedCol = clickedCard.texto % 3;
    console.log(clickedRow + "; " + clickedCol);
    // las resto para compararlas y ya si pueden le piensan en como compararla bien pls 
    const rowDifference = Math.abs(emptyRow - clickedRow);
    const colDifference = Math.abs(emptyCol - clickedCol);
    console.log(rowDifference + "; " + colDifference);

    console.log(
      (rowDifference === 1 && colDifference === 0) ||
        (colDifference === 1 && rowDifference === 0)
    );
    // Verifica si la posición clicada está adyacente a la posición vacía
    return (
      (rowDifference === 1 && colDifference === 0) ||
      (colDifference === 1 && rowDifference === 0)
    );
  };

  return (
    <div className="tablero">
      {cards.map((card, index) => (
        <Card key={index} card={card} onCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default App;
