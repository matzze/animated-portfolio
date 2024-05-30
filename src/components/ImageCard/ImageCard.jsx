// ImageCard.jsx
import React from "react";
import "./imageCard.scss";

const ImageCard = ({ src, title, description }) => {
  // Funktion zum Springen zu einem bestimmten Abschnitt
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  // Bestimme die ID des Abschnitts basierend auf dem Titel
  const sectionId = title.toLowerCase().replace(" ", ""); // Entferne Leerzeichen und mache es alles kleingeschrieben

  // Funktion zum Handhaben des Klicks auf die Karte
  const handleClick = () => {
    scrollToSection(sectionId); // Springe zu der entsprechenden Sektion
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={src} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {title !== "Studio NEU" && (
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
