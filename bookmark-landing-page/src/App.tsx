import "./App.css";
import {
  CardsSection,
  Carousel,
  Faq,
  Footer,
  HeroBanner,
  MobileNav,
  Navbar,
  Newsletter,
} from "./components";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <MobileNav />
      <HeroBanner />
      <Carousel />
      <CardsSection />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
