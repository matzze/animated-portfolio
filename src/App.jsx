import React, { useState, useEffect } from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Tir from "./components/tir/Tir";
import Wasa from "./components/wasa/Wasa";
import Studios from "./components/overviewStudios/studios";
import Impressum from "./components/impressum/Impressum";

const App = () => {
  // Zustand zum Verfolgen der aktuellen angezeigten Sektion und zur Aktualisierung der URL
  const [currentSection, setCurrentSection] = useState("home");

  // Funktion zum Ändern der angezeigten Sektion
  const changeSection = (sectionId) => {
    setCurrentSection(sectionId);
  };

  // Effekt zum Aktualisieren der URL basierend auf der aktuellen Sektion
  useEffect(() => {
    const handleScroll = () => {
      // Finde die aktuelle sichtbare Sektion basierend auf dem Scrollen
      const sections = document.querySelectorAll("section");
      let currentVisibleSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentVisibleSection = section.id;
        }
      });

      // Aktualisiere die URL entsprechend der aktuellen sichtbaren Sektion
      window.history.replaceState(null, null, `#${currentVisibleSection}`);
      setCurrentSection(currentVisibleSection);
    };

    // Füge ein Event-Listener für das Scrollen hinzu, um die URL entsprechend zu aktualisieren
    window.addEventListener("scroll", handleScroll);

    // Entferne den Event-Listener, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Startseite mit Navbar und Hero */}
      <section id="home">
        <Navbar className="container" />
        <div className="background-overlay"></div>
        <Hero changeSection={changeSection} />
      </section>

      {/* Sektion für Tirschenreuth */}
      <section id="tir">
        <Tir />
      </section>

      {/* Sektion für Waldsassen */}
      <section id="wasa">
        <Wasa />
      </section>

      {/* Sektion für Studios */}
      <section id="studios">
        <Studios />
      </section>

      {/* Impressum-Sektion */}
      <section id="impressum">
        <Impressum />
      </section>
    </div>
  );
};

export default App;
