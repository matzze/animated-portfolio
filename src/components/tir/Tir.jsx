import React from "react";
import "./tir.scss";
import ContractCard from "../ContractCard/ContractCard";
import TwentyFourHoursIcon from "../../svgs/twentyFour";
import DrinkSVG from "../../svgs/drink";
import IntroductionSVG from "../../svgs/introduction";
import ShowerSVG from "../../svgs/shower";
import CardioSvg from "../../svgs/cardio";
import tirMapImage from "../../../images/tirmap1.png";
import hantelnImage from "../../../images/hanteln.jpg";
import monatImage from "../../../images/1monat.jpg";
import tenImage from "../../../images/10er.jpg";
import twelveImage from "../../../images/12monate.jpg";
import kursequerImage from "../../../images/kursequer.jpg";
import Course from "../../Course/course";

const Tir = () => {
  return (
    <div>
      <div className="tirHeader">
        <h1 className="h1Tir">Tirschenreuth</h1>
        <h1 className="h1Choose">Wähle deine Laufzeit!</h1>
      </div>

      <div className="Contracts">
        <ContractCard title="16 Monate" image={hantelnImage} />
        <ContractCard title="12 Monate" image={twelveImage} />
        <ContractCard title="1 Monat" image={monatImage} />
        <ContractCard title="10er-Karte" image={tenImage} />
      </div>

      <div className="InfoContainer">
        <div className="InfoItem">
          <h2 className="InfoHeader">Öffnungszeiten</h2>

          <p className="opening-hours-info">Montag bis Freitag </p>
          <p className="opening-hours-info">7 Uhr - 22 Uhr</p>
          <Course title="Aktuelle Kurse" image={kursequerImage} />
        </div>{" "}
        <div className="InfoItem">
          <h2 className="InfoHeader">Deine Vorteile</h2>
          <div className="icon-with-text">
            <IntroductionSVG className="svg-icon" />
            <span>Gratis Einführung</span>
          </div>
          <div className="icon-with-text">
            <ShowerSVG className="svg-icon" />
            <span>Duschen</span>
          </div>
          <div className="icon-with-text">
            <CardioSvg className="svg-icon" />
            <span>Top Cardiogeräte</span>
          </div>
          <div className="icon-with-text">
            <DrinkSVG className="svg-icon" />
            <span>Mineralgetränke</span>
          </div>
        </div>
        <div className="InfoItem">
          <h2 className="InfoHeader">Hier findest du uns</h2>
          <img src={tirMapImage} alt="Tirschenreuth Map" />
        </div>
        <div className="InfoVideo">
          <video
            src="../videos/GymBodyStyle.MP4"
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Tir;
