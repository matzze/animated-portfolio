import React from "react";
import "./studios.scss";
import picTir from "../../../images/hanteln.jpg";
import picWasa from "../../../images/1monat.jpg";
import picNewStudio from "../../../images/10er.jpg";

const Studios = () => {
  return (
    <div className="studios-outer-container">
      <div className="studios-inner-container">
        {/* Erste Spalte */}
        <div className="column">
          <img src={picWasa} alt="Bild1" />
          <h2>Studio Waldsassen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>

        {/* Zweite Spalte */}
        <div className="column">
          <h2>Studio Tirschenreuth</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <video autoPlay muted loop>
            <source src="../../../videos/GymBodyStyle.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dritte Spalte */}
        <div className="column">
          <img src={picNewStudio} alt="Bild3" />
          <h2>Neues Studio</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studios;
