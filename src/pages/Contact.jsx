import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, number: formData.phone, email: formData.email, message: formData.message }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 bg-purple-950/40"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatP ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">

        {/* ── PAGE HEADER ── */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 backdrop-blur-sm px-5 py-2 rounded-full border border-orange-500/30 text-orange-200 text-sm font-medium tracking-wider mb-6">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            {t("contactBadge")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("contactH1")}{' '}
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              {t("contactH1Span")}
            </span>
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("contactHeroText")}
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <span className="text-orange-400 text-xl animate-pulse">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* ── WHAT CAN YOU FIND + HOW WE HELP ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* What can you find on this page? */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-7 sm:p-8 h-full">
              <h2 className="text-white font-bold text-lg sm:text-xl mb-6">{t("contactWhatFind")}</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">💬</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactCard1Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactCard1P")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">📅</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactCard2Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactCard2P")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">📞</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactCard3Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactCard3P")}</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-6 leading-relaxed border-t border-white/10 pt-5">
                {t("contactAvailable")}
              </p>
            </div>
          </div>

          {/* How Can We Help You? */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-3xl border border-white/15 p-7 sm:p-8 h-full flex flex-col">
              <h2 className="text-white font-bold text-lg sm:text-xl mb-6">{t("contactHowHelp")}</h2>
              <div className="space-y-5 flex-1">
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center text-white text-sm font-bold">1</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactStep1Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactStep1P")}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 flex items-center justify-center text-white text-sm font-bold">2</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactStep2Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactStep2P")}</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">3</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{t("contactStep3Title")}</p>
                    <p className="text-white/70 text-sm leading-relaxed mt-1">{t("contactStep3P")}</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-6 leading-relaxed border-t border-white/10 pt-5">
                {t("contactClosing")}
              </p>
            </div>
          </div>
        </div>

        {/* ── CONTACT FORM + INFO ── */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-gradient-to-br from-purple-900/90 to-purple-800/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl p-6 sm:p-8">
              <div className="h-1 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 absolute top-0 left-0 right-0"></div>

              <h3 className="text-white font-bold text-lg mb-6">{t("contactFormTitle")}</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl text-white flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">{t("messageSentTitle")}</p>
                    <p className="text-white/70 text-sm">{t("messageSentText")}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t("fullNameLabel")} <span className="text-orange-400">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">👤</span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder={t("fullNamePlaceholder")}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t("phoneLabel")} <span className="text-white/40 text-xs">{t("optional")}</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">📱</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="+44 7578 146264"
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t("emailLabel")} <span className="text-orange-400">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">📧</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder={t("emailPlaceholder")}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">{t("messageLabel")} <span className="text-orange-400">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-white/40">💬</span>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                      placeholder={t("messagePlaceholder")}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none" />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="relative w-full px-6 py-3.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-lg">
                  {isSubmitting ? (
                    <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span><span>{t("sending")}</span></>
                  ) : (
                    <><span>{t("sendMessage")}</span><span>→</span></>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4 lg:sticky lg:top-28">
            <a href="https://m.me/lingolandias" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-2xl border border-white/15 hover:border-orange-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white text-xl shrink-0 group-hover:scale-110 transition-transform">💬</div>
              <div>
                <p className="text-white font-semibold">{t("contactMessenger")}</p>
                <p className="text-white/60 text-sm">{t("contactMessengerSub")}</p>
              </div>
              <span className="ml-auto text-white/40 group-hover:text-orange-400 transition-colors">→</span>
            </a>

            <a href="https://wa.me/447578146264" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-2xl border border-white/15 hover:border-green-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-white/60 text-sm">+44 7578 146264</p>
              </div>
              <span className="ml-auto text-white/40 group-hover:text-green-400 transition-colors">→</span>
            </a>

            <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-2xl border border-white/15">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center text-white text-xl shrink-0">📞</div>
              <div>
                <p className="text-white font-semibold">{t("contactCard3Title")}</p>
                <p className="text-white/60 text-sm">{t("contactPhone")}</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-900/90 to-purple-800/80 backdrop-blur-xl rounded-2xl border border-white/15">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-white font-semibold text-sm">{t("contactAvailShort")}</p>
              </div>
              <p className="text-white/60 text-sm">{t("contactAvailP")}</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── CLOSING STRIP ── */}
      <div className="relative container mx-auto px-4 max-w-6xl mt-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="px-6 py-2 bg-purple-900/60 backdrop-blur-sm rounded-full text-white/40 text-xs border border-white/10 inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            {t("contactBadge")}
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes floatP {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-20px); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
