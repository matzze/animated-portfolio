import React, { useState } from "react";
import "./course.scss";

const Course = ({ title, image, qrCode }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="coursecard-container">
      <div
        className={`coursecard ${flipped ? "is-flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="coursecard__face coursecard__face--front">
          <h2 className="h2Months">{title}</h2>
          {image && <img src={image} alt={title} />}{" "}
        </div>
        <div className="coursecard__face coursecard__face--back">
          <h3 className="back-title">
            Alle Infos findest du in der Whatsappgruppe
          </h3>
          <img src={qrCode} alt="QR Code" className="qr-code-small" />
        </div>
      </div>
    </div>
  );
};

export default Course;
