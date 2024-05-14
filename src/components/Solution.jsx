const Solution = ({ selectedAnswers, correctAnswers }) => {
  return (
    <div className="  shadow-xl border-2 rounded-lg bg-transparent ">
      <table className="w-full h-full  rounded-lg text-white p-5  ">
        <thead>
          <tr className=" ">
            <th className="p-5 text-xl font-bold">Your Answer</th>
            <th className=" p-5 text-xl font-bold">
              Correct Answer
            </th>
          </tr>
        </thead>

        <tbody >
          {correctAnswers.map((correctAnswer, index) => (
            <tr key={index} className="">
              <td
                className={` px-5 ${
                  selectedAnswers[index] !== correctAnswer
                    ? "line-through text-red-100 "
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
