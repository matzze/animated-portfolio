import "./newnavbar.scss";
import React, { useState } from "react";
import whatsappQR from "../../../images/whatsappQR.png";

const Navbar = () => {
  const [showQR, setShowQR] = useState(false);

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/body_style_fitness_tir.wasa/?theme=dark",
      "_blank"
    );
  };

  const toggleQR = () => {
    setShowQR(!showQR);
  };

  return (
    <div className="navbar">
      <img src="" alt="" className="logo"></img>
      <ul>
        <li>Impressum</li>
      </ul>
      <img
        src="./images/instaLogo.webp"
        alt=""
        className="instaIcon"
        onClick={openInstagram}
      ></img>

      <div
        className={`whatsappContainer ${showQR ? "showQR" : ""}`}
        onClick={toggleQR}
      >
        <img src="./images/whatsapp.png" alt="" className="whatsappIcon"></img>
        <img src={whatsappQR} alt="" className="whatsappQR"></img>
      </div>
    </div>
  );
};

export default Navbar;
