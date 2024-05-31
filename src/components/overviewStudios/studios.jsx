import React from "react";
import "./studios.scss";
import picTir from "../../../images/hanteln.jpg";
import picWasa from "../../../images/1monat.jpg";
import picNewStudio from "../../../images/studioneu.png";

const Studios = () => {
  return (
    <div className="studios-outer-container">
      <div className="studios-inner-container">
        {/* Erste Spalte */}
        <div className="waldsassen-column">
          <img src={picWasa} alt="Bild1" />
          <h2 className="waldsassen-h2">Studio Waldsassen</h2>
          <p className="waldsassen-p">
            <strong>Fun-Outdoor-Area:</strong> Genießen Sie das Training an der
            frischen Luft in unserer modernen Fun-Outdoor-Area. Ob Cardio,
            Krafttraining oder funktionelles Training - hier finden Sie
            vielfältige Möglichkeiten, Ihr Workout abwechslungsreich zu
            gestalten.
          </p>
          <p className="waldsassen-p">
            <strong>Ausreichend Parkplätze:</strong> Kein Stress bei der
            Parkplatzsuche! Unser Fitnessstudio verfügt über zahlreiche
            Parkplätze direkt vor der Tür. So können Sie entspannt ankommen und
            sich voll und ganz auf Ihr Training konzentrieren.
          </p>
          <p className="waldsassen-p">
            <strong>24 Stunden geöffnet:</strong> Flexibilität wird bei uns
            großgeschrieben. Unser Fitnessstudio ist rund um die Uhr geöffnet,
            damit Sie jederzeit trainieren können - egal ob früh morgens, spät
            abends oder mitten in der Nacht.
          </p>
        </div>

        {/* Zweite Spalte */}
        <div className="tirschenreuth-column">
          <h2 className="tirschenreuth-h2">Studio Tirschenreuth</h2>
          <p className="tirschenreuth-p">
            <strong>Solarium:</strong> Gönnen Sie sich nach dem Training eine
            entspannende Auszeit in unserem Solarium. Bitte beachten Sie, dass
            die Nutzung des Solariums gegen eine zusätzliche Gebühr erfolgt.
          </p>
          <p className="tirschenreuth-p">
            <strong>Vibraplate inklusive:</strong> Nutzen Sie unsere moderne
            Vibraplate, um Ihr Training zu intensivieren. Die Nutzung der
            Vibraplate ist für unsere Mitglieder kostenlos und jederzeit
            verfügbar.
          </p>
          <div className="tirschenreuth-video-container">
            <video autoPlay muted loop>
              <source src="../../../videos/GymBodyStyle.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Dritte Spalte */}
        <div className="new-studio-column">
          <img src={picNewStudio} alt="Bild3" />
          <h2 className="new-studio-h2">Neues Studio</h2>
          <p className="new-studio-p">
            Wir freuen uns, Ihnen bald unser brandneues Fitnessstudio
            präsentieren zu können. Bleiben Sie gespannt - weitere Informationen
            folgen in Kürze!
          </p>
          <button className="new-studio-button">
            Jetzt Probetraining vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studios;
