// components/Collaboration.jsx
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

// Imágenes temporales de Unsplash (colaboradores)
const collaboratorImages = {
  ux1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  ux2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  dev1: "https://images.unsplash.com/photo-1531427186791-6bbb2f7e1bdf?w=400&h=400&fit=crop",
  dev2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  data1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
  data2: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop",
  marketing1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  marketing2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
};

const Collaboration = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeRole, setActiveRole] = useState(null);

  const collaborators = [
    {
      id: 1,
      name: "Elena Rodríguez",
      role: "UX/UI Designer",
      flag: "🇪🇸",
      color: "from-orange-400 to-orange-500",
      bgPattern: "🎨",
      description: "Especialista en diseño de experiencias de aprendizaje intuitivas. Crea interfaces que hacen que aprender sea un placer visual.",
      image: collaboratorImages.ux1,
      specialties: ["Diseño de interfaz", "Experiencia de usuario", "Prototipado"],
      social: {
        behance: "#",
        linkedin: "#",
        portfolio: "#"
      },
      icon: "🎨",
      accent: "✨",
      company: "Freelance Senior"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Frontend Developer",
      flag: "🇦🇷",
      color: "from-purple-500 to-purple-600",
      bgPattern: "💻",
      description: "Arquitecto de código y mago de React. Transforma diseños en experiencias interactivas fluidas y accesibles.",
      image: collaboratorImages.dev1,
      specialties: ["React", "Tailwind", "Animaciones"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      icon: "⚛️",
      accent: "⚡",
      company: "Tech Lead"
    },
    {
      id: 3,
      name: "Anna Kowalski",
      role: "Data Scientist",
      flag: "🇵🇱",
      color: "from-blue-500 to-cyan-500",
      bgPattern: "📊",
      description: "Analiza patrones de aprendizaje para optimizar nuestro método. Convierte datos en insights educativos.",
      image: collaboratorImages.data1,
      specialties: ["Machine Learning", "Análisis predictivo", "Python"],
      social: {
        kaggle: "#",
        linkedin: "#",
        github: "#"
      },
      icon: "🤖",
      accent: "📈",
      company: "AI Research"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Backend Developer",
      flag: "🇬🇧",
      color: "from-indigo-500 to-blue-500",
      bgPattern: "⚙️",
      description: "Ingeniero de sistemas escalables. Garantiza que nuestra plataforma funcione sin problemas para miles de estudiantes.",
      image: collaboratorImages.dev2,
      specialties: ["Node.js", "Python", "Bases de datos"],
      social: {
        github: "#",
        linkedin: "#",
        stackoverflow: "#"
      },
      icon: "🔧",
      accent: "⚙️",
      company: "Senior Engineer"
    },
    {
      id: 5,
      name: "Sofía Ramírez",
      role: "Content Creator",
      flag: "🇨🇴",
      color: "from-pink-500 to-rose-500",
      bgPattern: "📝",
      description: "Creadora de contenido educativo. Transforma conceptos complejos en lecciones entretenidas y memorables.",
      image: collaboratorImages.marketing1,
      specialties: ["Copywriting", "Storytelling", "Video"],
      social: {
        instagram: "#",
        linkedin: "#",
        youtube: "#"
      },
      icon: "✍️",
      accent: "🎬",
      company: "Creative Director"
    },
    {
      id: 6,
      name: "Thomas Müller",
      role: "QA Engineer",
      flag: "🇩🇪",
      color: "from-green-500 to-emerald-500",
      bgPattern: "🔍",
      description: "Cazador de bugs profesional. Asegura que cada funcionalidad sea perfecta antes de llegar a nuestros estudiantes.",
      image: collaboratorImages.data2,
      specialties: ["Testing", "Automation", "Calidad"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      },
      icon: "🐞",
      accent: "✅",
      company: "QA Lead"
    },
    {
      id: 7,
      name: "Laura Schmidt",
      role: "Product Manager",
      flag: "🇩🇪",
      color: "from-yellow-500 to-amber-500",
      bgPattern: "🎯",
      description: "Visionaria del producto. Conecta las necesidades de los estudiantes con soluciones tecnológicas innovadoras.",
      image: collaboratorImages.marketing2,
      specialties: ["Product Strategy", "Agile", "Roadmap"],
      social: {
        linkedin: "#",
        twitter: "#",
        medium: "#"
      },
      icon: "🎯",
      accent: "🚀",
      company: "Product Owner"
    },
    {
      id: 8,
      name: "María González",
      role: "UX Researcher",
      flag: "🇪🇸",
      color: "from-orange-400 to-purple-500",
      bgPattern: "🔬",
      description: "Investigadora de comportamiento de usuarios. Descubre cómo mejorar la experiencia de aprendizaje día a día.",
      image: collaboratorImages.ux2,
      specialties: ["User Research", "Entrevistas", "Usability"],
      social: {
        linkedin: "#",
        behance: "#",
        medium: "#"
      },
      icon: "🔍",
      accent: "💡",
      company: "Research Lead"
    }
  ];

  // Agrupar por roles para filtros
  const roles = [...new Set(collaborators.map(c => c.role.split(' ').pop()))];
  
  const filteredCollaborators = activeRole 
    ? collaborators.filter(c => c.role.includes(activeRole))
    : collaborators;

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Header */}
      <Header />
      
      {/* Fondo consistente */}
      <div className="absolute inset-0 bg-purple-950/40 backdrop-blur-sm"></div>
      
      {/* ARTE ÉPICO - ESTILO COLABORACIÓN/RED */}
      
      {/* Capa 1: Nodos de conexión */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={2 + Math.random() * 4}
              fill="url(#nodeGradient)"
              className="animate-pulse-slow"
              style={{ animationDelay: `${Math.random() * 5}s` }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#nodeGradient)"
              strokeWidth="0.5"
              strokeDasharray="5,5"
              opacity="0.2"
            />
          ))}
        </svg>
      </div>

      {/* Capa 2: Iconos de profesiones flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl animate-float-slow">🎨</div>
        <div className="absolute bottom-40 right-20 text-8xl animate-float-slow animation-delay-2000">💻</div>
        <div className="absolute top-1/3 right-1/4 text-7xl animate-float-slow animation-delay-4000">📊</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl animate-float-slow animation-delay-1000">⚙️</div>
        <div className="absolute top-2/3 left-1/3 text-6xl animate-float-slow animation-delay-3000">🎯</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl animate-float-slow animation-delay-2500">🔬</div>
        <div className="absolute top-40 right-40 text-7xl animate-float-slow animation-delay-1500">🤝</div>
        <div className="absolute bottom-40 left-40 text-7xl animate-float-slow animation-delay-3500">🌐</div>
      </div>

      {/* Capa 3: Partículas de conexión */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
              opacity: Math.random() * 0.4,
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Capa 4: Círculos de colaboración */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-orange-500/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-purple-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* HEADER - ESTILO COLABORACIÓN */}
        <div className="text-center mb-16 relative">
          {/* Badge de colaboración */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-6 py-2 rounded-full border border-orange-500/30 mb-6">
            <span className="text-2xl">🤝</span>
            <span className="text-white/90 text-sm font-medium tracking-wider">COLABORADORES</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            <span className="relative">
              El talento
              <span className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-purple-600/30 blur-2xl"></span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient">
              detrás de Lingolandias
            </span>
          </h2>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Conoce a los profesionales que hacen posible nuestra metodología. 
            Un equipo multidisciplinario apasionado por la educación y la tecnología.
          </p>

          {/* Estadísticas de equipo */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-10">
            <div className="flex items-center gap-2">
              <span className="text-3xl">👥</span>
              <span className="text-white/70">{collaborators.length}+ colaboradores</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌍</span>
              <span className="text-white/70">8 países</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏆</span>
              <span className="text-white/70">7 disciplinas</span>
            </div>
          </div>

          {/* Separador decorativo */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-2xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
          </div>
        </div>

        {/* FILTROS POR ROL - AHORA SIN PARPADEOS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveRole(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              !activeRole
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            Todos
          </button>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeRole === role
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* GRID DE COLABORADORES - SIN PARPADEOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredCollaborators.map((collab, index) => (
            <div
              key={collab.id}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(collab.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Múltiples capas de glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${collab.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-700`}></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
              
              {/* Tarjeta principal */}
              <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-2xl border border-white/20 overflow-visible shadow-2xl h-full hover:scale-[1.02] transition-transform duration-500">
                
                {/* Barra superior */}
                <div className={`h-1.5 bg-gradient-to-r ${collab.color}`}></div>
                
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-5 text-4xl flex flex-wrap justify-center items-start pt-10">
                  {collab.bgPattern.repeat(30)}
                </div>
                
                <div className="relative p-5">
                  {/* Avatar y rol */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${collab.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-700`}></div>
                      <img
                        src={collab.image}
                        alt={collab.name}
                        className="relative w-16 h-16 object-cover rounded-full border-2 border-white/30 shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center text-sm border-2 border-white/30">
                        {collab.flag}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base leading-tight">{collab.name}</h3>
                      <p className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${collab.color}`}>
                        {collab.role}
                      </p>
                      <p className="text-white/40 text-[10px] mt-0.5">{collab.company}</p>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${collab.color} flex items-center justify-center text-lg shadow-lg`}>
                      {collab.icon}
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <p className="text-white/70 text-xs leading-relaxed mb-3 line-clamp-2">
                    {collab.description}
                  </p>
                  
                  {/* Especialidades */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {collab.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] text-white/80 border border-white/10"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  {/* Redes sociales */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      {Object.keys(collab.social).map((platform, i) => (
                        <a
                          key={i}
                          href={collab.social[platform]}
                          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 hover:text-white transition-all text-xs"
                        >
                          {platform === 'behance' && '🎨'}
                          {platform === 'linkedin' && 'in'}
                          {platform === 'portfolio' && '📁'}
                          {platform === 'github' && '🐙'}
                          {platform === 'twitter' && '𝕏'}
                          {platform === 'kaggle' && '📊'}
                          {platform === 'stackoverflow' && '📚'}
                          {platform === 'instagram' && '📷'}
                          {platform === 'youtube' && '▶️'}
                          {platform === 'medium' && '✍️'}
                        </a>
                      ))}
                    </div>
                    
                    <span className="text-white/30 text-[10px] flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${collab.color} rounded-full animate-pulse`}></span>
                      Activo
                    </span>
                  </div>
                  
                  {/* Badge flotante - AHORA USA hoveredCard, NO activeRole */}
                  {hoveredCard === collab.id && (
                    <div className="absolute -top-2 -right-2 animate-bounce z-20">
                      <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] rounded-full shadow-2xl border border-white/30 font-bold whitespace-nowrap flex items-center gap-1">
                        {collab.accent} {collab.role.split(' ').pop()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN ¿QUIERES COLABORAR? */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-r from-orange-600/30 to-purple-600/30 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-3xl border border-white/20 overflow-hidden">
            
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 text-8xl opacity-10 animate-float-slow">🤝</div>
            <div className="absolute bottom-0 left-0 text-8xl opacity-10 animate-float-slow animation-delay-2000">✨</div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <span className="inline-block text-6xl mb-4 animate-bounce-slow">🚀</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Quieres ser parte del equipo?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Buscamos talento apasionado por la educación y la tecnología. 
                Únete a nuestra red de colaboradores internacionales.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-bold hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2">
                  <span>Enviar CV</span>
                  <span>→</span>
                </button>
                <button className="px-5 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/20 transition-all">
                  Ver vacantes
                </button>
              </div>
              
              <p className="text-white/40 text-xs mt-6">
                ✦ Buscamos diseñadores, desarrolladores, data scientists y más ✦
              </p>
            </div>
          </div>
        </div>

        {/* ESTADÍSTICAS DE COLABORACIÓN */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">8+</span>
            <p className="text-white/60 text-xs mt-2">Países</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">7</span>
            <p className="text-white/60 text-xs mt-2">Disciplinas</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">50+</span>
            <p className="text-white/60 text-xs mt-2">Proyectos</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">24/7</span>
            <p className="text-white/60 text-xs mt-2">Colaboración</p>
          </div>
        </div>

        {/* SEPARADOR INFERIOR */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-8 py-3 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/60 text-sm border border-white/20 inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              🎨 DISEÑO · 💻 DESARROLLO · 📊 DATA · 🤝 COLABORACIÓN 🎯
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* CSS PERSONALIZADO */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 8s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Collaboration;