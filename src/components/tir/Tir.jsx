import React from "react";
import "./tir.scss";
import ContractCard from "../ContractCard/ContractCard";
import TwentyFourHoursIcon from "../../svgs/twentyFour";
import DrinkSVG from "../../svgs/drink";
import IntroductionSVG from "../../svgs/introduction";
import ShowerSVG from "../../svgs/shower";
import CardioSvg from "../../svgs/cardio";
import tirMapImage from "../../../images/tirmap1.png";
import studioImage from "../../../images/74Overview.jpg";

const Tir = () => {
  return (
    <div>
      <div className="tirHeader">
        <h1 className="h1Tir">Tirschenreuth</h1>
        <h1 className="h1Choose">Wähle deine Laufzeit!</h1>
      </div>

      <div className="Contracts">
        <ContractCard title="16 Monate" image={studioImage} />
        <ContractCard title="12 Monate" />
        <ContractCard title="1 Monat" />
        <ContractCard title="10er-Karte" />
      </div>

      <div className="InfoContainer">
        <div className="InfoItem">
          <h2>Öffnungszeiten</h2>
          <p>Geöffnet von Montag bis Freitag von 7 Uhr bis 22 Uhr</p>
        </div>
        <div className="InfoItem">
          <h2>Vorteile</h2>
          <div className="icon-with-text">
            <IntroductionSVG className="svg-icon" />
            <span>Einführung</span>
          </div>
          <div className="icon-with-text">
            <ShowerSVG className="svg-icon" />
            <span>Dusche</span>
          </div>
          <div className="icon-with-text">
            <CardioSvg className="svg-icon" />
            <span>Cardio</span>
          </div>
          <div className="icon-with-text">
            <DrinkSVG className="svg-icon" />
            <span>Trinken</span>
          </div>
          <div className="icon-with-text">
            <TwentyFourHoursIcon className="svg-icon" />
            <span>24 Stunden</span>
          </div>
        </div>
        <div className="InfoItem">
          <h2>Hier findest du uns</h2>
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
