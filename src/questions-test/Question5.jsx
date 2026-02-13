// Question5.jsx
import React, { useState } from "react";

const Question5 = ({ onNext }) => {
  const phrases = ["Always", "Usually", "Often", "Rarely", "Never", "Sometimes"];
  const translations = ["czasami", "rzadko", "zazwyczaj", "nigdy", "zawsze", "często"];

  const [selectedPhrase, setSelectedPhrase] = useState(null);
  const [matches, setMatches] = useState(Array(phrases.length).fill(null));
  const [matchColors, setMatchColors] = useState(Array(phrases.length).fill(null));

  const handlePhraseClick = (index) => {
    if (selectedPhrase === null) {
      setSelectedPhrase(index);
    }
  };

  const handleTranslationClick = (index) => {
    if (selectedPhrase !== null) {
      const color = matchColors[selectedPhrase] || getRandomColor();
      setMatchColors({ ...matchColors, [selectedPhrase]: color });
      const newMatches = [...matches];
      newMatches[selectedPhrase] = index;
      setMatches(newMatches);
      setSelectedPhrase(null);
    }
  };

  const handleNext = () => {
    // Check if all phrases have been matched
    if (matches.includes(null)) {
      alert('Please match all the phrases before proceeding.');
      return;
    }

    // Define the correct matches
    const correctMatches = {
      Always: "zawsze",
      Usually: "zazwyczaj",
      Often: "często",
      Rarely: "rzadko",
      Never: "nigdy",
      Sometimes: "czasami",
    };

    // Initialize a variable to track if all matches are correct
    let allMatchesCorrect = true;

    // Loop through the phrases and check if each match is correct
    phrases.forEach((phrase, index) => {
      const translation = translations[matches[index]];
      const correctTranslation = correctMatches[phrase];

      // Check if the translation matches the correct translation
      if (translation !== correctTranslation) {
        allMatchesCorrect = false; // Set to false if any match is incorrect
      }
    });

    // Pass the result back to the parent component only if all matches are correct
    if (allMatchesCorrect) {
      onNext(true);
    } else {
      onNext(false);
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div className="question">Match the phrases with their translations:</div>
      <div className="flex ul justify-center gap-20">
        <div>
          {phrases.map((phrase, index) => {
            const backgroundColor = selectedPhrase === index ? "#FFC436" : matchColors[index] || "white";
            return (
              <div
                className="li answer-text"
                key={index}
                onClick={() => handlePhraseClick(index)}
                style={{
                  padding: "8px",
                  margin: "4px",
                  backgroundColor,
                  cursor: "pointer",
                }}
              >
                {phrase}
              </div>
            );
          })}
        </div>
        <div>
          {translations.map((translation, index) => (
            <div
              className="liQ5 answer-text"
              key={index}
              onClick={() => handleTranslationClick(index)}
              style={{
                padding: "8px",
                margin: "4px",
                backgroundColor: matchColors[matches.indexOf(index)] || "white",
                cursor: "pointer",
              }}
            >
              {translation}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-8">
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question5;
