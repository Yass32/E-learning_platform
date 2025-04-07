// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import modules from "../pages/Languages/Python/ModuleOverview.json";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ModuleBar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [open, setOpen] = useState(false);
    const { student_id } = useParams(); // Extract student_id from the URL
    const [completedLessons, setCompletedLessons] = useState([]);

    const toggle = () => {
        setOpen(!open);
    };

    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? "" : section));
    };

    const handleLessonProgress = async (lesson_id) => {
        if (completedLessons.includes(lesson_id)) {
            return; // Lesson is already completed
        }

        setCompletedLessons((prev) => [...prev, lesson_id]);

        let progress_percentage = ((completedLessons.length) / 13) * 100; // Fix progress calculation

        try {
            await axios.put(`${VITE_BACKEND_URL}/students/${student_id}/progress`, {
                student_id: student_id,
                course_id: 1,
                progress_percentage: progress_percentage
            });

            console.log(`Progress updated: ${progress_percentage.toFixed(2)}%`);
        } catch (error) {
            console.error("Error updating progress:", error);
        }
    };

    return (
        <div className="flex h-screen w-[22%] text-2xl">
            {/* Sidebar */}
            <div className="flex-col bg-gray-800 text-white transition-all duration-300 ">
                <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/coursespage`}>
                    <IoIosArrowBack className="size-10 m-3 focus:outline-none hover:scale-105 text-white " />
                </Link>

                {/* Menu Items */}
                {modules.map((module, index) => (
                    <div key={index + 1}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-700"
                                onClick={() => toggleSection(module.name)}>
                            {module.name}
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                        ${activeSection === module.name ? "max-h-40" : "max-h-0"}`}>
                            {module.lessons.map((lesson) => (
                                <div className="ml-4" key={lesson.id}>
                                    <ul>
                                        <li className="py-1 px-2 hover:bg-gray-600">
                                            <Link to={`https://e-learning-platform-client.onrender.com/${student_id}${lesson.path}`}
                                               onClick={() => handleLessonProgress(lesson.id)}>
                                                {lesson.name} {completedLessons.includes(lesson.id) && "✅"}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-700" onClick={toggle}>
                        Assessment
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40' : 'max-h-0'}`}>
                        <div className="ml-4">
                            <ul>
                                <li className="py-1 px-2 hover:bg-gray-600">
                                    <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/quizpage`}>Quiz</Link>
                                </li>
                                <li className="py-1 px-2 hover:bg-gray-600">
                                    <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/pythonex1`}>Exercises</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleBar;
