import React, { useState } from "react";
import "./contractCard.scss";

const ContractCard = ({
  title,
  image,
  price,
  activationFee,
  serviceFee,
  note,
}) => {
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
          <h2>{price}</h2>
          <p> &nbsp;{activationFee}</p>
          <br />
          <p> &nbsp; {serviceFee}</p> <br />
          <p>{note}</p>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
