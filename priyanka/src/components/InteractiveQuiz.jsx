import { useState } from 'react';

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 1,
      explanation: "Binary search has O(log n) time complexity as it divides the search space in half with each iteration."
    },
    {
      question: "Which data structure follows LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      correct: 1,
      explanation: "Stack follows LIFO (Last In, First Out) principle where the last element added is the first one to be removed."
    },
    {
      question: "What is the primary purpose of normalization in databases?",
      options: ["To increase storage space", "To reduce data redundancy", "To slow down queries", "To make data more complex"],
      correct: 1,
      explanation: "Normalization is used to reduce data redundancy and improve data integrity in databases."
    },
    {
      question: "Which programming paradigm does Java primarily follow?",
      options: ["Procedural", "Object-Oriented", "Functional", "Logic"],
      correct: 1,
      explanation: "Java is primarily an object-oriented programming language, though it supports other paradigms."
    },
    {
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "High Tech Transfer Process", "Home Tool Transfer Protocol", "Hyper Transfer Text Protocol"],
      correct: 0,
      explanation: "HTTP stands for HyperText Transfer Protocol, which is the foundation of data communication on the World Wide Web."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  const getScorePercentage = () => {
    return (score / questions.length) * 100;
  };

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quiz Results</h2>
        
        <div className="mb-8">
          <div className="text-6xl font-bold text-indigo-600 mb-4">{score}/{questions.length}</div>
          <div className="text-xl text-gray-600 mb-2">
            {getScorePercentage()}% Correct
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getScorePercentage()}%` }}
            ></div>
          </div>
          
          <div className="text-lg font-semibold text-gray-900">
            {getScorePercentage() >= 80 ? "🎉 Excellent! Great job!" :
             getScorePercentage() >= 60 ? "👍 Good work! Keep learning!" :
             getScorePercentage() >= 40 ? "📚 Not bad! Review the topics!" :
             "📖 Keep studying! You'll get better!"}
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Take Quiz Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Interactive Quiz</h2>
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                  selectedAnswer === index
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-900">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Score: {score}/{currentQuestion}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>

      {/* Explanation */}
      {selectedAnswer !== null && (
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
          <h4 className="font-medium text-indigo-900 mb-2">Explanation:</h4>
          <p className="text-indigo-800 text-sm">
            {questions[currentQuestion].explanation}
          </p>
        </div>
      )}
    </div>
  );
}
