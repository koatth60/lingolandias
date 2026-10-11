import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Arrow, NOTE_COLORS } from "../nevera/ui";

const LETTERS = "ABCDEF";

const Question5 = ({ onNext }) => {
  const { t } = useTranslation();
  const phrases = ["Always", "Usually", "Often", "Rarely", "Never", "Sometimes"];
  const translations = ["czasami", "rzadko", "zazwyczaj", "nigdy", "zawsze", "często"];

  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [matches, setMatches] = useState(Array(phrases.length).fill(null));
  const [hint, setHint] = useState(false);
  // one note colour per pair, so a matched phrase and its translation share a colour (and a letter)
  const [matchColors] = useState([...NOTE_COLORS, "#a9d8ff"]);

  const handlePhraseClick = (index) => {
    if (selectedPhrase === null) setSelectedPhrase(index);
    setHint(false);
  };

  const handleTranslationClick = (index) => {
    if (selectedPhrase !== null) {
      const newMatches = [...matches];
      newMatches[selectedPhrase] = index;
      setMatches(newMatches);
      setSelectedPhrase(null);
      setHint(false);
    }
  };

  const handleNext = () => {
    if (matches.includes(null)) {
      setHint(true);
      return;
    }
    const correctMatches = { Always: "zawsze", Usually: "zazwyczaj", Often: "często", Rarely: "rzadko", Never: "nigdy", Sometimes: "czasami" };
    const allCorrect = phrases.every((phrase, index) => translations[matches[index]] === correctMatches[phrase]);
    onNext(allCorrect);
  };

  return (
    <div className="qcard" style={{ "--qm": "#127a6e" }}>
      <h2 className="qprompt">Match the phrases with their translations:</h2>
      <p className="qhelp">Click a phrase on the left, then click its matching translation on the right.</p>

      <div className="qmatch">
        {/* Phrases column */}
        <div>
          <p className="qcolhead" id="q5-phrases">{t("phrases")}</p>
          <ul className="qcol" aria-labelledby="q5-phrases">
            {phrases.map((phrase, index) => {
              const isMatched = matches[index] !== null;
              const isSelected = selectedPhrase === index;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="qpick word"
                    lang="en"
                    data-state={isSelected ? "selected" : isMatched ? "matched" : "idle"}
                    style={{ "--c": matchColors[index] }}
                    aria-pressed={isSelected}
                    onClick={() => handlePhraseClick(index)}
                  >
                    <span className="chip" aria-hidden="true">{LETTERS[index]}</span>
                    <span>{phrase}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Translations column */}
        <div>
          <p className="qcolhead" id="q5-translations">{t("translations")}</p>
          <ul className="qcol" aria-labelledby="q5-translations">
            {translations.map((translation, index) => {
              const matchedByPhrase = matches.indexOf(index);
              const isMatched = matchedByPhrase !== -1;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="qpick"
                    lang="pl"
                    data-state={isMatched ? "matched" : "idle"}
                    style={isMatched ? { "--c": matchColors[matchedByPhrase] } : undefined}
                    onClick={() => handleTranslationClick(index)}
                  >
                    <span className="chip" aria-hidden="true">{isMatched ? LETTERS[matchedByPhrase] : ""}</span>
                    <span>{translation}</span>
                    {isMatched && <span className="sr" lang="en">{` = ${phrases[matchedByPhrase]}`}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="qactions">
        {hint && <p className="qhint" role="alert">{t("pleaseMatchAll")}</p>}
        <button type="button" className="btn btn-ink" onClick={handleNext}>
          {t("next")} <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Question5;
