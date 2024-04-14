import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Tir from "./components/tir/Tir";
import Wasa from "./components/wasa/Wasa";
import Studios from "./components/overviewStudios/studios";

const App = () => {
  return (
    <div>
      <section>
        <Navbar className="container" />
        <div className="background-overlay"></div>
        <Hero />
      </section>

      <section>
        <Tir />
      </section>

      <section>
        <Wasa />
      </section>
      <section>
        <Studios />
      </section>
      <section>Contact</section>
    </div>
  );
};

export default App;
