import React from "react";
import { codingCards } from "../../utils/chooseUsCards";
import "../../components/digitalmarketing/ChooseUsCards.css";

export default function CodingCards() {
  return (
    <div className="card-container">
      {codingCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

function Card({ id, title, number, description, isHighlighted }) {
  return (
    <div
      className={`card ${isHighlighted ? "card-highlighted" : "card-regular"}`}
    >
      {isHighlighted ? (
        <>
          <h3 className="card-title">Creating Coders</h3>
          <h2 className="card-title">of Tomorrow</h2>
        </>
      ) : (
        <>
          <div className="card-number">{number}</div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </>
      )}
    </div>
  );
}