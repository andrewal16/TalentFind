import React, { useState } from 'react';
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react';

const PersonalityQuestionnaire = ({ questions, answers, onAnswerChange, onNext, onPrev }) => {
  const getIcon = (option) => {
    switch(option) {
      case 'Disagree': return <XCircle className="text-red-500" />;
      case 'Neutral': return <MinusCircle className="text-gray-500" />;
      case 'Agree': return <CheckCircle className="text-green-500" />;
      default: return null;
    }
  };

  const isAllAnswered = answers.every(ans => ans !== null);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Personality Insights
        </h1>
        <p className="text-gray-600">
          Answer these questions candidly to help us understand your professional personality.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div 
            key={index} 
            className="
              bg-gray-50 
              border border-gray-200 
              rounded-xl 
              p-4 
              transition-all 
              duration-300 
              hover:shadow-md
              hover:border-blue-200
            "
          >
            <p className="text-lg font-semibold text-gray-800 mb-4">
              {question}
            </p>
            <div className="flex justify-center gap-8">
              {['Disagree', 'Neutral', 'Agree'].map((option) => (
                <label 
                  key={option} 
                  className={`
                    flex 
                    items-center 
                    gap-2 
                    cursor-pointer 
                    px-4 
                    py-2 
                    rounded-full 
                    transition-all 
                    duration-300
                    ${answers[index] === option 
                      ? 'bg-blue-100 border border-blue-300 scale-105' 
                      : 'hover:bg-gray-100'}
                  `}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => onAnswerChange(index, option)}
                    className="hidden"
                  />
                  {getIcon(option)}
                  <span className={`
                    font-medium 
                    ${answers[index] === option 
                      ? 'text-blue-700' 
                      : 'text-gray-700'}
                  `}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={onPrev}
          className="
            px-6 
            py-3 
            bg-gray-200 
            text-gray-800 
            rounded-lg 
            hover:bg-gray-300 
            transition-all 
            duration-300
          "
        >
          Back
        </button>
        <button 
          onClick={onNext}
          disabled={!isAllAnswered}
          className={`
            px-6 
            py-3 
            text-white 
            rounded-lg 
            transition-all 
            duration-300 
            ${isAllAnswered 
              ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105' 
              : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalityQuestionnaire;