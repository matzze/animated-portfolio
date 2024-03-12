import "./newnavbar.scss";
//import "./navbar.scss"
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="" alt="" className="logo"></img>
      <ul>
        <li>Impressum</li>
      </ul>
      <img src="./images/instaLogo.webp" alt="" className="instaIcon"></img>
      <img src="./images/whatsapp.png" alt="" className="whatsappIcon"></img>
    </div>
  );
};

export default Navbar;

/*
const Navbar = () => {
  return (
    <div className="navbar">Navbar

      <div className="wrapper">
        <span>BodyStyle</span>
        <div className="social">
          <a href="#"><img src="./images/instaLogo.webp" alt=""></img></a>

        </div>
      </div>
    </div>
  )
}

export default Navbar*/
