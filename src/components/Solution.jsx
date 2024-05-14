const Solution = ({ selectedAnswers, correctAnswers }) => {
  return (
    <div className="  shadow-xl border-2 rounded-lg bg-transparent ">
      <table className="w-full h-full  rounded-lg text-teal-700 p-5  ">
        <thead>
          <tr className=" ">
            <th className="p-5 text-xl font-bold bg-teal-700 text-white  border-r-2 border-white">Your Answer</th>
            <th className=" p-5 text-xl font-bold bg-teal-700 text-white ">
              Correct Answer
            </th>
          </tr>
        </thead>

        <tbody >
          {correctAnswers.map((correctAnswer, index) => (
            <tr key={index} className="">
              <td
                className={` px-5 border-r-2 border-teal-700 ${
                  selectedAnswers[index] !== correctAnswer
                    ? "line-through text-red-300 "
                    : "normal font-bold"
                }`}
              >
                {selectedAnswers[index]}
              </td>
              <td className=" px-5 py-2 font-bold">{correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Solution;
