import React, { useState } from "react";
import "./course.scss";

const Course = ({ title, image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped); // Umkehrung des flipped-Zustands
  };

  return (
    <div
      className={`course-container ${flipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="course-card">
        <div className="front">
          <h2 className="course-title">{title}</h2>
          {image && <img src={image} alt={title} className="course-image" />}
        </div>
        <div className="back">
          {/* Rückseiteninhalt hier einfügen */}
          <p>Hier könnte die Rückseite der Karte sein.</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
