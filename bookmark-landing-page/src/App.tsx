import "./App.css";
import { CardsSection, Carousel, Faq, HeroBanner, Navbar } from "./components";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroBanner />
      <Carousel />
      <CardsSection />
      <Faq />
    </div>
  );
}

export default App;
