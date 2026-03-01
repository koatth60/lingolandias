import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Levels = () => {
  const { t } = useTranslation();

  const levels = [
    { name: "A1", desc: "Beginner", color: "from-orange-400 to-orange-600", icon: "🌱" },
    { name: "A2", desc: "Elementary", color: "from-orange-500 to-purple-500", icon: "📚" },
    { name: "B1", desc: "Intermediate", color: "from-purple-500 to-purple-600", icon: "💬" },
    { name: "B2", desc: "Upper Intermediate", color: "from-purple-600 to-orange-500", icon: "🎯" },
    { name: "C1", desc: "Advanced", color: "from-orange-500 to-purple-600", icon: "🎓" },
    { name: "C2", desc: "Mastery", color: "from-purple-600 to-orange-500", icon: "👑" }
  ];

  return (
    <div className="mt-32">
      <div className="text-center mb-12">
        {/* ⚠️ ESTA ES LA LÍNEA QUE TE DA ERROR - CORREGIDA */}
        <h2 className="text-4xl font-bold text-white mb-3">Niveles de idioma</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {levels.map((level, index) => (
          <div key={level.name} className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-orange-500/50 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                {level.name}
              </span>
              <span className="text-2xl opacity-30 group-hover:opacity-60 transition-opacity">
                {level.icon}
              </span>
            </div>
            <p className="text-white/90 text-base mb-3">{level.desc}</p>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-500 group-hover:w-full`}
                style={{ width: `${(index + 1) * 16}%` }}
              ></div>
            </div>
            {index === 2 && (
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                Popular
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link to="/test" className="px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2 text-sm">
          <span>Evaluar mi nivel</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default Levels;