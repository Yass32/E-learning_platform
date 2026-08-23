// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuChevronDown, LuCircleCheck, LuCircle } from "react-icons/lu";
import modules from "../pages/Languages/Python/ModuleOverview.json";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ModuleBar = () => {
    const { pathname } = useLocation();
    const { student_id } = useParams(); // Extract student_id from the URL
    const currentModule = modules.find((m) => m.lessons.some((l) => pathname.endsWith(l.path)));
    const [activeSection, setActiveSection] = useState(currentModule?.name || "");
    const [open, setOpen] = useState(pathname.includes("quizpage") || pathname.includes("pythonex"));
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
        <div className="w-[22%] shrink-0">
            {/* Sidebar */}
            <div className="w-[22%] h-screen bg-ink-950 text-cloud flex flex-col fixed overflow-y-auto border-r border-white/5">
                <div className="flex items-center gap-2 p-4 border-b border-white/10">
                    <Link to={`/${student_id}/coursespage`}
                        className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors">
                        <IoIosArrowBack className="size-5 text-mist" />
                    </Link>
                    <span className="font-semibold text-sm text-mist">Python Course</span>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-2">
                    {modules.map((module, index) => {
                        const isOpen = activeSection === module.name;
                        return (
                            <div key={index + 1}>
                                <button className="w-full flex items-center justify-between text-left px-4 py-2.5 text-sm font-semibold hover:bg-white/5 transition-colors"
                                        onClick={() => toggleSection(module.name)}>
                                    {module.name}
                                    <LuChevronDown className={`text-mist transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? "max-h-96" : "max-h-0"}`}>
                                    {module.lessons.map((lesson) => {
                                        const to = `/${student_id}${lesson.path}`;
                                        const isActive = pathname === to;
                                        const isDone = completedLessons.includes(lesson.id);
                                        return (
                                            <Link key={lesson.id} to={to}
                                               onClick={() => handleLessonProgress(lesson.id)}
                                               className={`flex items-center gap-2 py-2 pl-8 pr-3 text-sm transition-colors ${
                                                   isActive ? "bg-rose-600/15 text-rose-400" : "text-mist hover:bg-white/5 hover:text-cloud"
                                               }`}>
                                                {isDone ? <LuCircleCheck className="text-rose-500 shrink-0" /> : <LuCircle className="opacity-40 shrink-0" />}
                                                <span className="truncate">{lesson.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    <div>
                        <button className="w-full flex items-center justify-between text-left px-4 py-2.5 text-sm font-semibold hover:bg-white/5 transition-colors" onClick={toggle}>
                            Assessment
                            <LuChevronDown className={`text-mist transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40' : 'max-h-0'}`}>
                            {[
                                { label: "Quiz", to: `/${student_id}/quizpage` },
                                { label: "Exercises", to: `/${student_id}/pythonex1` },
                            ].map((item) => {
                                const isActive = pathname === item.to;
                                return (
                                    <Link key={item.to} to={item.to}
                                        className={`block py-2 pl-8 pr-3 text-sm transition-colors ${
                                            isActive ? "bg-rose-600/15 text-rose-400" : "text-mist hover:bg-white/5 hover:text-cloud"
                                        }`}>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleBar;
