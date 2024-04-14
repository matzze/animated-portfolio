import React from "react";
import "./wasa.scss"; // Importiere die umbenannte CSS-Datei
import ContractCard from "../ContractCard/ContractCard";
import TwentyFourHoursIcon from "../../svgs/twentyFour";
import DrinkSVG from "../../svgs/drink";
import IntroductionSVG from "../../svgs/introduction";
import ShowerSVG from "../../svgs/shower";
import CardioSvg from "../../svgs/cardio";
import wasaMapImage from "../../../images/bodywasamap.png";
import hantelnImage from "../../../images/hanteln.jpg";
import monatImage from "../../../images/1monat.jpg";
import tenImage from "../../../images/10er.jpg";
import twelveImage from "../../../images/12monate.jpg";
import kursequerImage from "../../../images/kurse.jpg";
import bodywasaImage from "../../../images/bodywasa.png";
import qrKurse from "../../../images/qr.png"; // Hinzugefügtes QR-Code-Bild
import Course from "../../Course/course";

const Wasa = () => {
  return (
    <div className="wasaBackground">
      <div className="wasaHeader">
        <img src={bodywasaImage} alt="Bodytir" className="" />
        <h1 className="h1Choose">Wähle deine Laufzeit!</h1>
      </div>
      <div className="Contracts">
        <ContractCard
          title="15 Monate"
          image={hantelnImage}
          price="19,90€*"
          activationFee="• Einmalig 20€ Chipaktivierung"
          serviceFee="• Jährlich Servicepauschale von 39,95€"
          note="*Bei Vorab Barzahlung"
        />
        <ContractCard
          title="12 Monate"
          image={twelveImage}
          price="24,90€*"
          activationFee="• Einmalig 20€ Chipaktivierung"
          serviceFee="• Jährlich Servicepauschale von 39,95€"
          note="*Bei Kontoabbuchung"
        />
        <ContractCard
          title="1 Monat"
          image={monatImage}
          price="44,90€*"
          activationFee="• Einmalig 20€ Chipaktivierung"
          serviceFee=" "
          note=""
        />
        <ContractCard
          title="10er- Karte"
          image={tenImage}
          price="85€*"
          activationFee="• Einmalig 40€ Chipaktivierung"
          serviceFee=""
          note=""
        />
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
              <span>Fun-Outdoor-Area</span>
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
        <div className="InfoItemWasa">
          <h2 className="InfoHeader">Hier findest du uns</h2>
          <a
            href="https://www.google.com/maps/dir//Sch%C3%BCtzenstra%C3%9Fe+81,+95652+Waldsassen/@50.0129332,12.2126671,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47a059c6ba76aec1:0x47b206ff7a4cb63a!2m2!1d12.2950688!2d50.0129615?entry=ttu"
            target="_blank" // Öffnet den Link in einem neuen Tab
            rel="noopener noreferrer" // Empfohlen für Sicherheit und Barrierefreiheit
          >
            <img
              src={wasaMapImage}
              alt="Waldsassen Map"
              className="map-image-wasa"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wasa;
