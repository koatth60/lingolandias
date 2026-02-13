// SpaniShine.com
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Generalnfo from "./sections/Generalnfo";
import Footer from "./sections/Footer";
import Metod from "./sections/Metod";
import Videos from "./sections/Videos";
import Reviews from "./sections/Reviews";
import LanguageSwticher from "./components/LanguageSwticher";

// App.jsx o Layout.jsx
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Crear partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${15 + Math.random() * 15}s`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`;
      particle.style.boxShadow = `0 0 15px rgba(44, 62, 110, ${0.3 + Math.random() * 0.5})`;
      particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
    
    return () => {
      document.body.removeChild(particlesContainer);
    };
  }, []);

  return (
    <>
      <div className="energy-waves">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="cosmic-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A2F4F" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2C3E6E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1A2F4F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${300 + i * 80} C 250 ${200 + i * 60}, 750 ${400 + i * 60}, 1000 ${300 + i * 80}`}
              stroke="url(#cosmic-wave)"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="12 12"
              opacity="0.2"
            >
              <animate 
                attributeName="d" 
                dur={`${18 + i * 2}s`} 
                values={`M0 ${300 + i * 80} C 250 ${200 + i * 60}, 750 ${400 + i * 60}, 1000 ${300 + i * 80};
                        M0 ${320 + i * 80} C 250 ${220 + i * 60}, 750 ${420 + i * 60}, 1000 ${320 + i * 80};
                        M0 ${300 + i * 80} C 250 ${200 + i * 60}, 750 ${400 + i * 60}, 1000 ${300 + i * 80}`}
                repeatCount="indefinite" 
              />
            </path>
          ))}
        </svg>
      </div>
      <div className="aurora"></div>
      <div className="cosmic-grid"></div>
      
      {/* TU CONTENIDO CON Z-INDEX 10 */}
      <div className="relative z-10">
        <Header />
        <Hero />
         <LanguageSwticher />
//       <Generalnfo />
  <Metod />
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
