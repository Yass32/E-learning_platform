/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import Questionnaire from '../components/Questionnaire';
import { FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const courseIcons = { 1: FaPython, 2: SiJavascript, 3: FaJava };

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const ProfilePage = () => {
    // State to store the student's full name
    const [fullName, setFullName] = useState("");
    
    // State to manage loading state while fetching data
    const [loading, setLoading] = useState(false);

    // State to control whether to show the questionnaire
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);

    // State to store the profile picture URL
    const [profilePicUrl, setProfilePicUrl] = useState("");

    // State to manage the list of courses and their progress
    const [courses, setCourses] = useState([
        { name: "Python", course_id: 1, path: "/python/module1/lesson1", courseCompletion: 0.00, message: "" },
        { name: "JavaScript", course_id: 2, path: "/javascript/module1/lesson1", courseCompletion: 0.00, message: "" },
        { name: "Java", course_id: 3, path: "/java/module1/lesson1", courseCompletion: 0.00, message: "" },
    ]);
    
    // Get student_id from URL parameters (React Router)
    const { student_id } = useParams();

    // Fetch student details and progress when component mounts or student_id changes
    useEffect(() => {
        const fetchStudent = async () => {
            // Set loading state to true while fetching data
            setLoading(true);
            
            // Simulate loading for 2 seconds (UI feedback)
            setTimeout(() => setLoading(false), 2000);
    
            try {
                // Fetch student details (e.g., full name) from the backend
                const response = await axios.get(`${VITE_BACKEND_URL}/students/${student_id}`);
                
                // Update state with the fetched full name
                setFullName(response.data.full_name);

                // Update state with the fetched profile picture URL
                setProfilePicUrl(`${VITE_BACKEND_URL}` + response.data.profile_picture || "");
        
                // Fetch course progress for each course
                const updatedCourses = await Promise.all(
                    courses.map(async (course) => {
                        try {
                            // Fetch student's progress for the specific course
                            const progressResponse = await axios.get(`${VITE_BACKEND_URL}/students/${student_id}/progress/${course.course_id}`);

                            console.log("Progress Response:", progressResponse.data); // Debug progress response
                            
                            // Update course completion percentage
                            return { ...course, courseCompletion: progressResponse.data.progress_percentage };
                        } catch (error) {
                            // If fetching progress fails, set progress to 0.00
                            return { ...course, courseCompletion: 0.00 };
                        }
                    })
                );
        
                // Update courses state with new progress data
                setCourses(updatedCourses);
            } catch (error) {
                // Handle errors if fetching student details fails
                console.error("Error fetching student details:", error);
            }
        };

        // Call the fetchStudent function
        fetchStudent();
    }, [student_id]); // Runs when student_id changes

    // Function to reset course progress for a specific course
    const handleReset = (course_id) => async () => {   
        console.log(course_id); // Log the course ID being reset

        try {
            // Send a DELETE request to reset student's progress for the given course
            await axios.delete(`${VITE_BACKEND_URL}/students/${student_id}/progress/${course_id}`);
            
            // Remove completed lessons data from localStorage for this course only
            // (the key is scoped per course_id - see ProgressTracker.jsx)
            localStorage.removeItem(`completedLessons_${student_id}_${course_id}`);

            // Update the state: Reset progress for the selected course and show a success message
            setCourses(prevCourses =>
                prevCourses.map(course =>
                    course.course_id === course_id 
                        ? { ...course, courseCompletion: 0.00, message: "Progress has been reset!" } 
                        : course
                )
            );
        } catch (error) {
            // Handle errors if reset fails and show an error message in UI
            setCourses(prevCourses =>
                prevCourses.map(course =>
                    course.course_id === course_id 
                        ? { ...course, message: "Failed to reset progress. Please try again." } 
                        : course
                )
            );
        } 
    };
    



    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex h-screen">
                    {/* Sidebar (Left) */}
                    <SideBar name={fullName} profilePic={profilePicUrl}/>
            
                    {/* Full-Width Right Column */}
                    <main className="ml-[22%] flex-1 bg-surface p-10 overflow-auto">
                        <div className="mb-1">
                            <h1 className="text-4xl font-extrabold text-ink-900">Hello {fullName}!</h1>
                        </div>
                        <div className="mb-8 text-base">
                            <p className="text-gray-500">Not sure where to begin?
                                <a className="text-rose-600 font-semibold hover:underline cursor-pointer ml-1"
                                onClick={() => setShowQuestionnaire(!showQuestionnaire)}>Take our quiz →</a>
                            </p>
                        </div>

                        {showQuestionnaire && <Questionnaire />}


                        {/* Course Cards */}
                        <div className="space-y-4">
                            {courses.map(course => {
                                const Icon = courseIcons[course.course_id];
                                return (
                                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" key={course.course_id}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 rounded-lg bg-ink-950 flex items-center justify-center shrink-0">
                                                <Icon className="text-rose-500 text-xl" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <h3 className="text-lg font-bold text-ink-900">{course.name}</h3>
                                                    <span className="text-sm font-semibold text-gray-500">{course.courseCompletion}%</span>
                                                </div>
                                                {/* Progress Bar */}
                                                <div className="w-full bg-surface h-2.5 rounded-full overflow-hidden">
                                                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 h-full rounded-full transition-all duration-500 ease-out"
                                                    style={{ width: `${course.courseCompletion}%` }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Reset Button */}
                                        <div className='flex justify-between items-center mt-3'>
                                            <div className="text-sm text-rose-600">
                                                {course.message}
                                            </div>
                                            <button className="text-gray-500 text-sm font-semibold hover:text-rose-600 transition-colors duration-200"
                                                onClick={handleReset(course.course_id)}>
                                                Reset progress
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </main>
                </div>
            )}
        </>
      
    );
};

export default ProfilePage