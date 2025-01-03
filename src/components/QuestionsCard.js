import React from "react";

const QuestionCard = ({ question, onAnswer, index }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-6">Pertanyaan {index + 1}</h2>
      <p className="text-lg mb-8">{question.text}</p>

      <div className="flex justify-center space-x-16">
        <button
          onClick={() => onAnswer(question.id, true)}
          className="flex flex-col items-center space-y-2 focus:outline-none"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-50 ${
              question.answer === true ? "bg-green-500" : ""
            }`}
          >
            {question.answer === true && (
              <div className="w-6 h-6 bg-white rounded-full" />
            )}
          </div>
          <span className="text-green-500">YA</span>
        </button>

        <button
          onClick={() => onAnswer(question.id, false)}
          className="flex flex-col items-center space-y-2 focus:outline-none"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center hover:bg-purple-50 ${
              question.answer === false ? "bg-purple-500" : ""
            }`}
          >
            {question.answer === false && (
              <div className="w-6 h-6 bg-white rounded-full" />
            )}
          </div>
          <span className="text-purple-500">TIDAK</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
