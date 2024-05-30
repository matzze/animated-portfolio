import React from "react";
import "./imageCard.scss";

const ImageCard = ({ src, title, description }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {title !== "Studio NEU" && ( // Bedingte Anweisung: Überprüfen, ob der Titel nicht "Studio NEU" ist
          <a href="#" className="button">
            Klicke für mehr Infos
            <span className="material-symbols-outlined"></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
