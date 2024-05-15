export const Progress = ({ selectedAnswers }) => {
  return (
    <div className="border-2 p-5  bg-white shadow-lg rounded-lg m-5 mr-0 mt-0  min-w-1">
      <h1 className="sm:text-xl text-center pb-5 text-sm  ">Progress</h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {selectedAnswers.map((answer, index) => (
          <button
            key={index}
            className={`p-2 rounded-lg text-white ${
              answer !== null ? "bg-teal-700" : "bg-gray-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex  hidden sm:block  flex-col justify-center items-start  m-4">
        <div className="  sm:flex items-center ">
          <div className="w-4 h-4 bg-teal-700 mr-2"></div>
          <span >Attempted</span>
        </div>
        <div className="flex mt-5 ">
          <div className="w-4 h-4 bg-gray-500 mr-2"></div>
          <span >Not Attempted</span>
        </div>
      </div>
    </div>
  );
};