// SpaniShine.com
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Generalnfo from "./sections/Generalnfo";
import Footer from "./sections/Footer";
import Metod from "./sections/Metod";
import Videos from "./sections/Videos";
import Reviews from "./sections/Reviews";
import LanguageSwticher from "./components/LanguageSwticher";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <LanguageSwticher />
      <Generalnfo />
      <Metod />
      <Videos />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
