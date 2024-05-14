import React, { useState } from "react";

export const Question = ({ question, answerOptions, number , onAnswerChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="mb-6  ">
           <button 
           style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}
           disabled={selectedAnswer!==null}
           onClick={() => setIsOpen(!isOpen)} className={`flex flex-col justify-between items-center w-full shadow-white shadow-sm rounded-lg  p-5 text-lg font-semibold mb-2 disabled:text-gray-200 disabled:shadow-none text-white ${isOpen ? ' shadow-xl shadow-gray-200 hover:shadow-gray-300' : selectedAnswer !== null ? 'text-gray-400  cursor-not-allowed' : ''}`}>

        <div className="flex justify-between items-start w-full">
          <div className="text-left pr-6">
            Q.{number}) {question}{" "}
          </div>
          <div className="flex  items-center justify-center px-5">
          {selectedAnswer !== null && <div className=" mr-1 text-sm bg-purple-700 text-white rounded-full px-2">Attempted</div>}
          <div className="text-right">{isOpen ? "▲" : "▼"}</div>
          </div>
        </div>
        {isOpen && (
          <div className="m-5  p-5 grid grid-cols-2 gap-2 w-full  border  rounded-lg ">
            {answerOptions.map((option, index) => (
              <label key={index} className=" flex items-start">
                <div className=" w-5  ">
                  <input
                    type="radio"
                    name="answer"
                    value={option.answer}
                    onChange={() => {setSelectedAnswer(option.answer);onAnswerChange(option.answer);}}
                  />
                </div>

                <div className=" w-52 text-left">{option.answer}</div>
              </label>
            ))}
            
          </div>
        )}
     

      </button>
    </div>
  );
};
