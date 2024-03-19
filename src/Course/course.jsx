import React from "react";
import "./course.scss";

const Course = ({ title, image }) => {
  return (
    <div className="course-container">
      <div className="course-card">
        <h2 className="course-title">Aktuelle Kurse</h2>
        {image && <img src={image} alt={title} className="course-image" />}
      </div>
    </div>
  );
};

export default Course;
