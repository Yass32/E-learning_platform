import { useState } from "react";
import ModuleBar from "../../../components/ModuleBar"; // Sidebar module navigation
import questions from "./PyQuizQuestions.json"; // Quiz questions imported from JSON file
import PageButton from "../../../components/PageButton"; // Component for navigation buttons
import { useParams } from "react-router-dom"; // Hook to access URL parameters

const PythonQuiz = () => {
  const { student_id } = useParams(); // Extract student_id from the URL
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Store user's selected answers for each question
  const [score, setScore] = useState(null); // Store the user's score after submission

  // Function to handle changes in selected options for a question
  const handleOptionChange = (questionIndex, option) => {
    // Update the selectedAnswers state with the selected option for the given question
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  // Function to calculate the user's score based on their answers
  const handleSubmit = () => {
    let calculatedScore = 0; // Initialize score counter

    // Loop through each question to check if the selected answer matches the correct answer
    questions.forEach((item, questionIndex) => {
      if (selectedAnswers[questionIndex] === item.answer) {
        calculatedScore += 1; // Increment score for each correct answer
      }
    });

    setScore(calculatedScore); // Update the score state
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar navigation */}
      <ModuleBar />

      {/* Main content area */}
      <main className="flex-1 bg-gray-100 p-8 overflow-auto">
        {/* Quiz title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-rose-700">Quiz</h2>
        </div>

        {/* Loop through each question in the JSON file */}
        {questions.map((item, questionIndex) => (
          <div className="mt-6" key={questionIndex}>
            {/* Display the question */}
            <p className="text-lg font-semibold text-gray-700">
              {questionIndex + 1}. {item.question}
            </p>

            {/* Loop through the options for the current question */}
            {item.options.map((option, optionIndex) => (
              <div
                key={`${questionIndex}-${optionIndex}`} // Unique key for each option
                className="flex items-center p-4 bg-gray-100 border rounded-lg hover:border-rose-500 cursor-pointer"
              >
                {/* Radio input for the option */}
                <input
                  type="radio"
                  id={`${questionIndex}-${optionIndex}`} // Unique ID for each option
                  name={`question-${questionIndex}`} // Group radio inputs by question
                  className="h-4 w-4 accent-rose-500 cursor-pointer"
                  onChange={() => handleOptionChange(questionIndex, option)} // Update selected option
                  checked={selectedAnswers[questionIndex] === option} // Check if this option is selected
                />
                {/* Label for the option */}
                <label
                  htmlFor={`${questionIndex}-${optionIndex}`}
                  className="ml-3 text-gray-700 font-medium"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {/* Submit button */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleSubmit} // Calculate score when clicked
            className="text-white bg-rose-600 rounded-md p-2 w-fit text-lg hover:bg-rose-800 transition-all duration-200"
          >
            Submit
          </button>
          {/* Navigation button for the next page */}
          <PageButton url={`/${student_id}/pythonex1`} text="Next" />
        </div>

        {/* Display the user's score after submission */}
        {score !== null && (
          <div className="mt-6 p-4 bg-green-100 border border-green-500 rounded-lg">
            <p className="text-green-700 font-semibold">
              Your score is: {score} / {questions.length} {/* Show score and total questions */}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PythonQuiz;
