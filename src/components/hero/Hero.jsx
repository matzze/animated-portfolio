import React from "react";
import "./hero.scss";
import ImageCard from "../ImageCard/ImageCard";

const Hero = () => {
  return (
    <div className="hero">
      <div className="ImageContainer">
        <img src="./images/bodystyleLogo.png" alt="" className="logoImg"></img>
      </div>

      <div className="H1Container">
        <h1 className="h1"></h1>
      </div>

      <div className="image-card">
        {/* Verwende href für die Navigation zu den verschiedenen Abschnitten */}
        <a href="#tir">
          <ImageCard
            src="./images/sw.jpg"
            title="Tirschenreuth"
            description=""
          />
        </a>

        <a href="#studios">
          <ImageCard
            src="./images/woman.jpg"
            title="STUDIO NEU"
            description=""
          />
        </a>

        <a href="#wasa">
          <ImageCard src="./images/sw6.jpg" title="Waldsassen" description="" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
