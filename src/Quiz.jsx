import { useState } from "react";
import { Modal } from "flowbite-react";
import { toast } from 'react-hot-toast';
import { Question } from "./components/Question";
import questions from "./questions";
import Solution from "./components/Solution";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Progress } from "./components/Progress";

export const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
  // const handleAnswerChange = (answer, index) => {
  //   const newAnswers = [...selectedAnswers];
  //   newAnswers[index] = answer;
  //   setSelectedAnswers(newAnswers);
  // };
  const handleAnswerChange = (answer, index) => {
    if (selectedAnswers[index] !== null) {
      toast.error("You've already answered this question");
      return;
    }

    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  return (
    <div className="flex justify-center items-start p-5 m-5 ">
    <div className="grid max-w-xl mx-auto p-5 h-screen overflow-scroll rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold mb-4 text-center text-teal-800">
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
      <div className="flex justify-end ">
        <button
          disabled={selectedAnswers.includes(null)}
          className=" m-5 bg-teal-700 py-2 px-5 font-bold text-2xl shadow-md shadow-white text-white rounded-lg disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
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
        className="w-fit h-fit p-8 m-auto shadow-xl border-2 border-teal-700 rounded-lg bg-teal-700 "
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <div className="my-2 w-full font-pacifico font-bold text-2xl text-center text-teal-700 flex flex-col justify-center items-center">
          <h1>Result </h1>
          Score : {score}/{questions.length}{" "}
        </div>
        <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 p-2 text-teal-700">
          <FontAwesomeIcon icon={faX} />
        </button>
        <Modal.Body>
          <div className="space-y-6 ">
            <Solution
              selectedAnswers={selectedAnswers}
              correctAnswers={correctAnswers}
            />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
    <Progress selectedAnswers={selectedAnswers}  />
</div>
  );
};
