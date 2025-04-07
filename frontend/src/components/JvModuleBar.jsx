// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import modules from "../pages/Languages/Java/JvModuleOverview.json";
import { Link, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";


const ModuleBar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [open, setOpen] = useState(false);
    const { student_id } = useParams(); // Extract student_id from the URL


    const toggle = () => {
        setOpen(!open);
    };
    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? "" : section));
    };

    return (
        <div className="flex h-screen w-[22%] text-2xl">
            {/* Sidebar */}
            <div className="flex-col bg-gray-800 text-white transition-all duration-300 ">
                <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/coursespage`}>
                <IoIosArrowBack className="size-10 focus:outline-none hover:scale-105 text-white " />
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
                            {module.lessons.map(lesson => (
                                <div className="ml-4" key={lesson.id}>
                                    <ul>
                                        <li className="py-1 px-2 hover:bg-gray-600"> <FaCheck />

                                        <Link to={`https://e-learning-platform-client.onrender.com/${student_id}${lesson.path}`}>{lesson.name}</Link>                                        
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                <div>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-700"  onClick={toggle} >
                        Assessment
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40' : 'max-h-0'}`} >
                        <div className="ml-4">
                            <ul>
                                <li className="py-1 px-2 hover:bg-gray-600">
                                <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/jvquizpage`}>Quiz</Link>
                                </li>
                                <li className="py-1 px-2 hover:bg-gray-600">
                                <Link to={`https://e-learning-platform-client.onrender.com/${student_id}/javaex1`}>Exercises</Link>
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
