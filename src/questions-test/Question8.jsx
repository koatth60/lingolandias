import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Arrow } from '../nevera/ui';

const Question8 = ({ onNext }) => {
  const { t } = useTranslation();
  const pronouns = ["I", "You", "He", "She", "It", "We", "You", "They"];
  const correctAnswers = ["was", "were", "was", "was", "was", "were", "were", "were"];
  const [inputs, setInputs] = useState(Array(pronouns.length).fill(''));
  const [hint, setHint] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setHint(false);
  };

  const handleNext = () => {
    if (inputs.some(input => input.trim() === '')) {
      setHint(true);
      return;
    }
    const allCorrect = inputs.every((input, index) => input.trim().toLowerCase() === correctAnswers[index]);
    onNext(allCorrect);
  };

  return (
    <div className="qcard" style={{ "--qm": "#6b1fa6" }}>
      <h2 className="qprompt" lang="pl">Uzupełnij odpowiednią formę czasownika „to be&quot; w czasie przeszłym.</h2>
      <p className="qhelp">Type <b>was</b> or <b>were</b> for each pronoun.</p>

      <div className="qgrid" lang="en">
        {pronouns.map((pronoun, index) => (
          <label key={index} className="qpair">
            <span className="who">{pronoun}</span>
            <input
              type="text"
              className="qinput"
              value={inputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="was / were"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </label>
        ))}
      </div>

      <div className="qactions">
        {hint && <p className="qhint" role="alert">{t("pleaseFillAll")}</p>}
        <button type="button" className="btn btn-ink" onClick={handleNext}>
          {t("next")} <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Question8;
