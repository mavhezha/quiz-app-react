import React, { useState} from "react";
import questions from "./Questions"
import "./styles.css";

export default function App() {
  
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  
  return (
    <div className="App">
      
      {/* 1. Header */}
      <h1>Who wants to be a millionaire (Quiz by Xavi)</h1>
      
      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>  
      
      {/* 3. Show results or show the question game  */}
      {/* 4.  Final Results */}
      {
        showResults ? (
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
              <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
              <div className="question-card">
                {/**Current Question  */}
                <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
                <h3 className="question-text">{questions[currentQuestion].text}</h3>
        
                {/* List of possible answers  */}
                <ul>
                   {questions[currentQuestion].options.map((option) => {
                     return (
                       <li
                         key={option.id}
                         onClick={() => optionClicked(option.isCorrect)}
                      >
                        {option.text}
                      </li>
                    );
                   })} 
                </ul>
              </div>
        )
      }
      
    </div>
  );
}
