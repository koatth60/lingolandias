// SpaniShine.com
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Generalnfo from "./sections/Generalnfo";
import Footer from "./sections/Footer";
import Metod from "./sections/Metod";
import PhilosophySection from "./sections/PhilosophySection";
import CommunitySection from "./sections/CommunitySection";
import Videos from "./sections/Videos";
import Reviews from "./sections/Reviews";
import LanguageSwticher from "./components/LanguageSwticher";

function App() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <Hero />
        <LanguageSwticher />
        <Metod />
        <PhilosophySection />
        <CommunitySection />
        <Videos />
        <Reviews />
        <Footer />
        {/* Resto de componentes */}
      </div>
    </>
  );
}

export default App;

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <LanguageSwticher />
//       <Generalnfo />
//       <Metod />
//       <Videos />
//       <Reviews />
//       <Footer />
//     </>
//   );
// };

// export default App;
