/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import Questionnaire from '../components/Questionnaire';

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
                const response = await axios.get(`http://localhost:3000/students/${student_id}`);
                
                // Update state with the fetched full name
                setFullName(response.data.full_name);

                // Update state with the fetched profile picture URL
                setProfilePicUrl("http://localhost:3000" + response.data.profile_picture || "");
        
                // Fetch course progress for each course
                const updatedCourses = await Promise.all(
                    courses.map(async (course) => {
                        try {
                            // Fetch student's progress for the specific course
                            const progressResponse = await axios.get(`http://localhost:3000/students/${student_id}/progress/${course.course_id}`);
                            
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
            await axios.delete(`http://localhost:3000/students/${student_id}/progress/${course_id}`);
            
            // Remove completed lessons data from localStorage
            localStorage.removeItem(`completedLessons_${student_id}`);

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
                    <main className="ml-[22%] flex-1 bg-gray-100 p-8 overflow-auto">
                        <div className="mb-2">
                            <h1 className="text-lg font-bold">Hello {fullName} !</h1>
                        </div>
                        <div className="mb-4 text-sm">
                            <p className=" text-gray-600">Not sure where to begin? 
                                <a className="text-rose-700 hover:underline cursor-pointer"
                                onClick={() => setShowQuestionnaire(!showQuestionnaire)}> Take our quiz →</a>                
                            </p>
                        </div>

                        {showQuestionnaire && <Questionnaire />}


                        {/* Course Cards */}
                        {courses.map(course => {
                            return (
                                <div className="mt-6 " key={course.course_id}>
                                    <div className="bg-white p-3 shadow rounded hover:scale-105 transform transition-all duration-300 hover:cursor-pointer">
                                        <h3 className="text-lg font-semibold text-gray-600">{course.name}</h3>
                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-200 mt-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full  text-center text-white text-xs font-bold transition-all duration-300 ease-in-out "
                                            style={{ width: `${course.courseCompletion}%` }}>
                                                {course.courseCompletion}%
                                            </div>
                                        </div>
                                    </div>
                                    {/* Reset Button */}
                                    <div className='flex justify-between mt-2'>
                                        <div className="text-red-500">
                                            {course.message}
                                        </div>
                                        <button className="text-white bg-rose-600 rounded-md p-2 w-fit text-xs hover:bg-rose-800 transition-all duration-200"
                                            onClick={handleReset(course.course_id)}> 
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </main>
                </div>
            )}
        </>
      
    );
};

export default ProfilePage