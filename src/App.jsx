import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Tir from "./components/tir/Tir";

const App = () => {
  return (
    <div>
      <section>
        <Navbar className="container" />
        <div className="background-overlay"></div>
        <Hero />
      </section>

      <section>
        <Tir className="container" />
      </section>

      <section>Wasa</section>
      <section>NewStudio</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
