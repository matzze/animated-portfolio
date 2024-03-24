import React, { useState } from "react";
import "./contractCard.scss";

const ContractCard = ({ title, image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="contractcard-container">
      <div
        className={`contractcard ${flipped ? "is-flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="contractcard__face contractcard__face--front">
          <h2 className="h2Months">{title}</h2>
          {image && <img src={image} alt={title} />}{" "}
        </div>
        <div className="contractcard__face contractcard__face--back">
          <h2>19,90€*</h2>
          <p> &nbsp;• Einmalig 40€ Chipaktivierung</p>
          <br />
          <p> &nbsp;• Jährlich Servicepauschale von 39,95€</p> <br />
          <p>*Bei Vorab Barzahlung </p>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
