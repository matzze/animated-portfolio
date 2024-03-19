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
        <h1 className="h1">Wähle dein Fitnessstudio!</h1>
      </div>

      <div className="image-card">
        <ImageCard
          src="./images/tir.jpg"
          title="Tirschenreuth"
          description="Beispieltext"
        />

        <ImageCard
          src="./images/wasa.jpg"
          title="Waldsassen"
          description="Bestes Fitnessstudio im ganzen Landkreis"
        />
        <ImageCard
          src="./images/hanteln.jpg"
          title="Studio NEU"
          description="Bestes neues Studio"
        />
      </div>
    </div>
  );
};

export default Hero;
