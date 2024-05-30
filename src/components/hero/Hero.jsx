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
        <ImageCard
          src="./images/typ.jpg"
          title="Tirschenreuth"
          description=""
        />

        <ImageCard src="./images/woman.jpg" title="Waldsassen" description="" />
        <ImageCard
          src="./images/typred.jpg"
          title="STUDIO NEU"
          description="Bald verfügbar!"
        />
      </div>
    </div>
  );
};

export default Hero;
