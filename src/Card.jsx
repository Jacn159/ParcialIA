// Card.jsx
import React from "react";

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card); // Llamamos a la función proporcionada por el padre con la tarjeta
  };

  return (
    <div
      className={card.texto === 9 ? "card vacio" : `card ${card.clase}`}
      onClick={handleClick}
    >
      {card.texto}
    </div>
  );
};

export default Card;
