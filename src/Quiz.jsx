import { useState } from "react";
import { Modal } from "flowbite-react";

import { Question } from "./components/Question";
import questions from "./questions";
import Solution from "./components/Solution";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = questions.map(
    (question) =>
      question.answerOptions.find((option) => option.isCorrect)?.answer
  );

  const checkAnswers = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      const correctAnswer = question.answerOptions.find(
        (option) => option.isCorrect
      )?.answer;
      if (selectedAnswers[index] === correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };
  const handleAnswerChange = (answer, index) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  return (
    <div
      style={{
        backdropFilter: "blur(100px)",
        backgroundColor: "rgba(255, 255, 255, 0.001)",
      }}
      className="grid max-w-xl mx-auto p-5 shadow-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-4 text-center text-white font-pacifico ">
        Do You Know?{" "}
      </h1>
      {questions.map((question, index) => (
        <Question
          key={index}
          number={index + 1}
          question={question.question}
          answerOptions={question.answerOptions}
          onAnswerChange={(answer) => handleAnswerChange(answer, index)}
        />
      ))}
      <div className="flex justify-end">
        <button
        disabled={selectedAnswers.includes(null)}
          className="m-5 font-pacifico py-2  px-5 font-bold text-2xl shadow-md shadow-white bg-purple-700 text-white  rounded-lg disabled:text-gray-400 disabled:bg-purple-100 disabled:cursor-not-allowed"
          onClick={() => {
            checkAnswers();
            setOpenModal(true);
          }}
        >
          Submit
        </button>
      </div>

      <Modal
      style={{
        backdropFilter: "blur(100px)",
        backgroundColor: "rgba(255, 255, 255, 0.00001)",
      }}
        className="w-fit h-fit p-8 m-auto shadow-xl border-2 rounded-lg   "
        dismissible
        
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
       
  <div className=" mb-2 w-full  font-pacifico  font-bold text-2xl text-center  text-white  flex flex-col justify-center items-center">
      <h1>Result </h1> 
      Score :  {score}/{questions.length}{" "}
    </div>
    <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 p-2 text-white">
    <FontAwesomeIcon icon={faX} />
    </button>
        <Modal.Body>
          <div className=" space-y-6 ">
            <Solution
              selectedAnswers={selectedAnswers}
              correctAnswers={correctAnswers}
            />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
