import "./App.css";
import {
  CardsSection,
  Carousel,
  Faq,
  HeroBanner,
  Navbar,
  Newsletter,
} from "./components";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroBanner />
      <Carousel />
      <CardsSection />
      <Faq />
      <Newsletter />
    </div>
  );
}

export default App;
