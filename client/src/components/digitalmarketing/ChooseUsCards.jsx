import React from "react";
import { dmCards } from "../../utils/chooseUsCards";
import "../../components/digitalmarketing/ChooseUsCards.css";
export default function ChooseUsCards() {
  return (
    <div className="card-container">
      {dmCards.map((card) => (
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
          <h3 className="card-title">Creating Stories</h3>
          <h2 className="card-title">Of The Future</h2>
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
