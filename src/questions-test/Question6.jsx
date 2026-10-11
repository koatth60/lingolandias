import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Arrow, NOTE_COLORS } from "../nevera/ui";

const LETTERS = "ABCD";

const Question6 = ({ onNext }) => {
  const { t } = useTranslation();
  const phrases = ["How much", "How many", "How long", "How big"];
  const sentences = [
    "sausages are you going to grill?",
    "money does it cost?",
    "is the Great Wall of China?",
    "is the Sphinx?",
  ];
  const correctMatches = {
    "How much": "money does it cost?",
    "How long": "is the Great Wall of China?",
    "How many": "sausages are you going to grill?",
    "How big": "is the Sphinx?",
  };

  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [matches, setMatches] = useState(Array(phrases.length).fill(null));
  const [hint, setHint] = useState(false);
  // one note colour per pair, so a matched question word and its sentence share a colour (and a letter)
  const [matchColors] = useState(NOTE_COLORS.slice(0, 4));

  const handlePhraseClick = (index) => {
    if (selectedPhrase === null) setSelectedPhrase(index);
    setHint(false);
  };

  const handleSentenceClick = (index) => {
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
    const allCorrect = phrases.every((phrase, index) => sentences[matches[index]] === correctMatches[phrase]);
    onNext(allCorrect);
  };

  return (
    <div className="qcard" style={{ "--qm": "#d0343f" }}>
      <h2 className="qprompt" lang="pl">Dopasuj pytajnik do odpowiedniego zdania:</h2>
      <p className="qhelp">Click a question word on the left, then click its matching sentence on the right.</p>

      <div className="qmatch">
        {/* Phrases column */}
        <div>
          <p className="qcolhead" id="q6-phrases">{t("questionWord")}</p>
          <ul className="qcol" aria-labelledby="q6-phrases">
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

        {/* Sentences column */}
        <div>
          <p className="qcolhead" id="q6-sentences">{t("sentenceEnding")}</p>
          <ul className="qcol" aria-labelledby="q6-sentences">
            {sentences.map((sentence, index) => {
              const matchedByPhrase = matches.indexOf(index);
              const isMatched = matchedByPhrase !== -1;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="qpick"
                    lang="en"
                    data-state={isMatched ? "matched" : "idle"}
                    style={isMatched ? { "--c": matchColors[matchedByPhrase] } : undefined}
                    onClick={() => handleSentenceClick(index)}
                  >
                    <span className="chip" aria-hidden="true">{isMatched ? LETTERS[matchedByPhrase] : ""}</span>
                    <span>{sentence}</span>
                    {isMatched && <span className="sr">{` = ${phrases[matchedByPhrase]}`}</span>}
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

export default Question6;
