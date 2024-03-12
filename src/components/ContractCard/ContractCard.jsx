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
          <h2>44,90€</h2>
          <ul>
            <li>Chipaktivierung von 40 Euro</li>
            <li>Es fällt einmal im Jahr eine Servicepauschale von 39,95€ an</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
