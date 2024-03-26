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
import kursequerImage from "../../../images/kurse.jpg";
import bodytirImage from "../../../images/bodytir.png";
import qrKurse from "../../../images/qr.png"; // Hinzugefügtes QR-Code-Bild
import Course from "../../Course/course";

const Tir = () => {
  return (
    <div className="tirBackground">
      <div className="tirHeader">
        <img src={bodytirImage} alt="Bodytir" className="map-image" />

        <h1 className="h1Choose">Wähle deine Laufzeit!</h1>
      </div>
      <div className="Contracts">
        <ContractCard title="15 Monate" image={hantelnImage} />
        <ContractCard title="12 Monate" image={twelveImage} />
        <ContractCard title="1 Monat" image={monatImage} />
        <ContractCard title="10er-Karte" image={tenImage} />
        <Course title="Kurse" image={kursequerImage} qrCode={qrKurse} />{" "}
        {/* QR-Code-Bild hinzugefügt */}
      </div>
      <div className="InfoContainer">
        <div className="InfoItem">
          <h2 className="InfoHeader">Öffnungszeiten</h2>
          <p className="opening-hours-info">
            Montag bis Sonntag <strong>6- 23 Uhr</strong>
          </p>
          <p className="opening-hours-info betreuungszeiten">
            Betreuungszeiten
          </p>
          <p className="opening-hours-info">
            Montag bis Donnerstag <strong>15- 19 Uhr</strong>
          </p>
          <p className="opening-hours-info">
            Freitag <strong>9- 12 Uhr</strong>
          </p>
        </div>
        <div className="InfoItem">
          <h2 className="InfoHeader">Deine Vorteile</h2>
          <div className="icon-container">
            <div className="icon-with-text">
              <IntroductionSVG className="svg-icon" />
              <span>Zertifizierter Rehasport Anbieter</span>
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
        </div>
        <div className="InfoItem">
          <h2 className="InfoHeader">Hier findest du uns</h2>
          <img src={tirMapImage} alt="Tirschenreuth Map" />
        </div>
      </div>
    </div>
  );
};

export default Tir;
