import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export const Question = ({
  question,
  answerOptions,
  number,
  onAnswerChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="mb-6  ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white flex flex-col justify-between items-center w-full  shadow-sm rounded-lg  p-5 text-lg font-semibold mb-2 disabled:text-gray-600 disabled:shadow-none text-teal-700 ${
          isOpen
            ? " shadow-xl shadow-gray-200 hover:shadow-gray-300"
            : selectedAnswer !== null
            ? "text-gray-400  "
            : ""
        }`}
      >
        <div className="flex justify-between items-start w-full">
          <div className="text-left pr-6">
            Q.{number}) {question}{" "}
          </div>
          <div className="flex  items-center justify-center px-5">
            {selectedAnswer !== null && (
              <div className=" mr-1 text-sm bg-teal-700 text-white rounded-full px-2">
                Attempted
              </div>
            )}
            <button className="text-right">{isOpen ? "▲" : "▼"}</button>
          </div>
        </div>
        {isOpen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="m-5  p-5 grid  gap-3 w-full    "
          >
            {answerOptions.map((option, index) => (

              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  // if (selectedAnswer !==null) {
                  //   toast.error("Can't change attempted answer");
                  // }
                }}
              >

                <button
                  className={`border disabled:cursor-not-allowed rounded-lg p-2 hover:bg-teal-700 hover:text-white ${
                    selectedAnswer === option.answer
                      ? "bg-teal-700 text-white cursor-not-allowed"
                      : ""
                  }`}
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();

                    setSelectedAnswer(option.answer);
                    onAnswerChange(option.answer);
                  }}
                  // disabled={selectedAnswer !== null}
                  title={
                    selectedAnswer !== null
                      ? "Already attempted answer can't be changed"
                      : ""
                  }
                >

                  <label className=" flex items-start">
                    <div className=" w-5  ">
                      <input
                        type="radio"
                        name="answer"
                        disabled={selectedAnswer !== option.answer}
                        value={option.answer}
                        checked={selectedAnswer === option.answer}
                        readOnly
                      />
                    </div>

                    <div className=" w-52 text-left pl-3 ">{option.answer}</div>
                  </label>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
