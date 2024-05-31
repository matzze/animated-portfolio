import React from "react";
import "./imageCard.scss";

const ImageCard = ({ src, title, description }) => {
  return (
    <div className={`card ${title === "STUDIO NEU" ? "new-studio" : ""}`}>
      <img src={src} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {title !== "STUDIO NEU" && ( // Bedingte Anweisung: Überprüfen, ob der Titel nicht "STUDIO NEU" ist
          <a href="" className="button">
            <span className="material-symbols-outlined"></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
