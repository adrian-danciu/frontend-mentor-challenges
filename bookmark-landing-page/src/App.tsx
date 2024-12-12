import "./App.css";
import {
  CardsSection,
  Carousel,
  Faq,
  Footer,
  HeroBanner,
  Navbar,
  Newsletter,
} from "./components";
import MobileNav from "./components/MobileNav/MobileNav";

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
