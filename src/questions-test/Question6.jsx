import React, { useState } from "react";

const Question6 = ({ onNext }) => {
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
  const [matchColors, setMatchColors] = useState(Array(phrases.length).fill(null));

  const handlePhraseClick = (index) => {
    if (selectedPhrase === null) {
      setSelectedPhrase(index);
    }
  };

  const handleSentenceClick = (index) => {
    if (selectedPhrase !== null) {
      const color = matchColors[selectedPhrase] || getRandomColor();
      const newMatchColors = [...matchColors];
      newMatchColors[selectedPhrase] = color;
      setMatchColors(newMatchColors);

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

    // Initialize a variable to track if all matches are correct
    let allMatchesCorrect = true;

    // Loop through the phrases and check if each match is correct
    phrases.forEach((phrase, index) => {
      const sentence = sentences[matches[index]];
      const correctSentence = correctMatches[phrase];

      // Check if the sentence matches the correct sentence
      if (sentence !== correctSentence) {
        allMatchesCorrect = false; // Set to false if any match is incorrect
      }
    });

    // Pass the result back to the parent component
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
      <p className="question">Dopasuj pytajnik do odpowiedniego zdania:</p>
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
          {sentences.map((sentence, index) => (
            <div
              className="liQ5 answer-text"
              key={index}
              onClick={() => handleSentenceClick(index)}
              style={{
                padding: "8px",
                margin: "4px",
                backgroundColor: matchColors[matches.indexOf(index)] || "white",
                cursor: "pointer",
              }}
            >
              {sentence}
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

export default Question6;
