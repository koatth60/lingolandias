import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../nevera/Layout.jsx';
import { Arrow, ICON, INSTAGRAM, Sticky, WA } from '../nevera/ui.jsx';
import '../nevera/quiz.css';
import '../nevera/contact.css';

// No legacy key exists for a failed send; keep the copy local until one is added to the locale files.
const SEND_ERROR = {
  es: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.',
  pl: 'Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz do nas na WhatsApp.',
  en: "We couldn't send your message. Please try again or write to us on WhatsApp.",
};

const Contact = () => {
  const { t, i18n } = useTranslation();
  const nv = useTranslation('nv').t;
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendError(false);
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
      } else {
        setSendError(true);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSendError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const lang = (i18n.resolvedLanguage || 'en').slice(0, 2);
  const req = <span className="req" aria-hidden="true">*</span>;

  return (
    <Layout>
      <section className="hero contact-hero">
        <div>
          <p className="hand">{t('contactBadge')}</p>
          <h1 className="s">
            <span>{t('contactH1').replace(/\s*[–-]\s*$/, '')}</span>
            <span className="a">{t('contactH1Span')}</span>
          </h1>
          <p className="lede">{t('contactHeroText')}</p>
        </div>
      </section>

      <section className="gsec enamel">
        <div className="wrap contact-grid">
          <div className="qcard contact-card">
            <h2>{t('contactFormTitle')}</h2>

            <form className="qform" onSubmit={handleSubmit}>
              <label>
                <span>{t('fullNameLabel')} {req}</span>
                <input className="qinput" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required
                  placeholder={t('fullNamePlaceholder')} />
              </label>

              <label>
                <span>{t('phoneLabel')} <span className="opt">{t('optional')}</span></span>
                <input className="qinput" type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange}
                  placeholder="+44 7578 146264" />
              </label>

              <label>
                <span>{t('emailLabel')} {req}</span>
                <input className="qinput" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required
                  placeholder={t('emailPlaceholder')} />
              </label>

              <label>
                <span>{t('messageLabel')} {req}</span>
                <textarea className="qinput" name="message" value={formData.message} onChange={handleChange} required rows="5"
                  placeholder={t('messagePlaceholder')} />
              </label>

              <div role="status" aria-live="polite">
                {isSubmitted && (
                  <p className="qstatus ok"><b>{t('messageSentTitle')}</b> {t('messageSentText')}</p>
                )}
              </div>
              {sendError && (
                <p className="qstatus ko" role="alert">
                  {SEND_ERROR[lang] || SEND_ERROR.en} <a href={WA}>+44 7578 146264</a>
                </p>
              )}

              <div className="qactions">
                <button type="submit" className="btn btn-ink" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting
                    ? <><span className="spin" aria-hidden="true" />{t('sending')}</>
                    : <>{t('sendMessage')} <Arrow /></>}
                </button>
              </div>
            </form>
          </div>

          <aside className="contact-notes" aria-label={nv('footer.contact')}>
            <Sticky c="var(--amber)" m="#d0343f" r={-1.5}>
              {ICON.chat}
              <h3>WhatsApp</h3>
              <p className="big">+44 7578 146264</p>
              <a href={WA} target="_blank" rel="noopener noreferrer">{nv('cta.writeWa')} <Arrow /></a>
            </Sticky>
            <Sticky c="var(--pink)" m="#6b1fa6" r={1.2}>
              {ICON.insta}
              <h3>Instagram</h3>
              <p className="big">@lingolandias</p>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">instagram.com/lingolandias <Arrow /></a>
            </Sticky>
            <Sticky c="var(--teal)" m="#2c6fd1" r={-1}>
              {ICON.globe}
              <h3>lingolandias.com</h3>
              <p>{nv('footer.tagline')}</p>
            </Sticky>
            <Sticky c="var(--lilac)" m="#e8792a" r={1.5}>
              {ICON.clock}
              <h3>{t('contactAvailShort')}</h3>
              <p>{t('contactAvailP')}</p>
            </Sticky>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
