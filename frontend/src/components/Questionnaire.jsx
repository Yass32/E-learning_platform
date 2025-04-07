import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios';
import Loading from './Loading';


const Questionnaire = () => {
    // State variables for handling modal, user answers, loading state, and recommendation results
    const [open, setOpen] = useState(true)
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState("");

    // Array of questions with corresponding options
    const questions = [
        { id: 1, text: "Do you prefer working on frontend or backend?", options: ["Frontend", "Backend", "Both"] },
        { id: 2, text: "Are you interested in AI, Data Science, or Cybersecurity?", options: ["Data Science", "AI & Machine Learning", "Cybersecurity", "None"] },
        { id: 3, text: "Would you rather build websites, mobile apps, or system applications?", options: ["Websites", "Mobile Apps", "System Applications"] },
        { id: 4, text: "How comfortable are you with math-heavy problems?", options: ["Love it", "Neutral", "Avoid it"] },
        { id: 5, text: "Do you prefer structured (strict rules) or flexible (creative) projects?", options: ["Structured", "Flexible", "A mix of both"] },
        { id: 6, text: "Which of these excites you the most?", options: ["Designing user interfaces", "Creating server logic & APIs", "Analyzing data", "Securing systems"] },
        { id: 7, text: "How do you feel about debugging?", options: ["Love debugging", "Prefer writing clean code", "Don't like errors"] },
        { id: 8, text: "What’s your ideal work environment?", options: ["Startup", "Big tech company", "Freelancing/remote", "Research & academia"] }
    ];

    // Function to handle user's answer selection
    const handleAnswer = (questionId, answer) => {
        // Update the answers object with the selected answer
        
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    // Function to submit the answers and fetch a recommendation
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:3000/api/recommendation`, { answers });
            setRecommendation(response.data.recommendation);
            console.log(response.data.recommendation);
            setOpen(false);
            setLoading(false);
        
        } catch (error) {
          console.error("Error fetching recommendation:", error);
        }
    };

    return (
        <>
            {loading? (<Loading />) : (
                <div>
                    {recommendation? (
                        <div className="p-4 bg-white shadow rounded-lg">
                            <h2 className="text-2xl font-semibold">Recommendation:</h2>
                            <pre className='text-wrap'>{recommendation}</pre>
                            <button className="mt-2 mx-auto block rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:hover:bg-rose-800 transition-all duration-200" 
                            onClick={() => {
                                setAnswers({});  // Reset answers
                                setRecommendation("");  // Clear previous recommendation
                                setOpen(true);  // Open the quiz again
                            }}>
                                Retake Quiz
                            </button>
                        </div>
                    ) : (
                        <Dialog open={open} onClose={setOpen} className="relative z-10">
                            <DialogBackdrop transition
                            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"/>

                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <DialogPanel transition
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                                                Career Questionnaire
                                            </DialogTitle>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Answer quick questions to get recommendations that match your interests.</p>
                                                <div>
                                                    {/* Loop through each question in the JSON file */}
                                                    {questions.map((question, questionIndex) => (
                                                    <div className="mt-6 space-y-1" key={questionIndex}>
                                                        {/* Display the question */}
                                                        <p className="text-sm font-semibold text-gray-700">
                                                        {questionIndex + 1}. {question.text}
                                                        </p>

                                                        {/* Loop through the options for the current question */}
                                                        {question.options.map((option, optionIndex) => (
                                                        <div
                                                            key={`${questionIndex}-${optionIndex}`} // Unique key for each option
                                                            className="flex items-center p-4 bg-gray-100 border rounded-lg hover:border-rose-500 cursor-pointer"
                                                        >
                                                            {/* Radio input for the option */}
                                                            <input
                                                            type="radio"
                                                            id={`${questionIndex}-${optionIndex}`} 
                                                            name={`question-${questionIndex}`} 
                                                            className="h-4 w-4 accent-rose-500 cursor-pointer"
                                                            onChange={() => handleAnswer(question.id, option)}
                                                            />
                                                            {/* Label for the option */}
                                                            <label
                                                            htmlFor={`${questionIndex}-${optionIndex}`}
                                                            className="ml-3 text-gray-700 text-sm"
                                                            >
                                                            {option}
                                                            </label>
                                                        </div>
                                                        ))}
                                                    </div>
                                                    ))}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                onClick={handleSubmit}
                                                className="inline-flex w-full justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:hover:bg-rose-800 transition-all duration-200 sm:ml-3 sm:w-auto"
                                            >
                                                Get Recommendation
                                            </button>
                                            <button
                                                type="button"
                                                data-autofocus
                                                onClick={() => setOpen(false)}
                                                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </DialogPanel>
                                </div>
                            </div>
                        </Dialog>
                    )}
                </div>
            )}
        </>
    )
}


export default Questionnaire
