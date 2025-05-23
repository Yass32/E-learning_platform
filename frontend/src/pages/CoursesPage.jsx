import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';
import axios from 'axios';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const CoursesPage = () => {
    const [loading, setLoading] = useState(false);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [fullName, setFullName] = useState("");
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const [message, setMessage] = useState("");
    const { student_id } = useParams(); // Extract student_id from the URL
    const navigate = useNavigate();

    const Courses = [
        { "name": "Python", "course_id": 1, "path": "/python/module1/lesson1" },
        { "name": "JavaScript", "course_id": 2, "path": "/javascript/module1/lesson1" },
        { "name": "Java", "course_id": 3, "path": "/java/module1/lesson1" }
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);

        const fetchStudentData = async () => {
            try {
                // Fetch enrollments and student info simultaneously
                const [enrollmentsResponse, studentResponse] = await Promise.all([
                    axios.get(`${VITE_BACKEND_URL}/students/${student_id}/enrollments`),
                    axios.get(`${VITE_BACKEND_URL}/students/${student_id}`)
                ]);
    
                setEnrolledCourses(enrollmentsResponse.data.enrolledCourses || []);
                setFullName(studentResponse.data.full_name);
                setProfilePicUrl(`${VITE_BACKEND_URL}` + studentResponse.data.profile_picture || "");
                console.log("Enrollments:", enrollmentsResponse.data);
                console.log("Student Info:", studentResponse.data);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };
    
        fetchStudentData();
    }, [student_id]);
    

    const handleEnrollment = (course) => {
        const { course_id, path } = course;

        // Convert to integer because of data type in database
        const user = {
            student_id: Number(student_id), 
            course_id: Number(course_id),
        };


        setLoading(true);
        setMessage("");

        axios.post(`${VITE_BACKEND_URL}/students/enroll`, user)
            .then((response) => {
                setEnrolledCourses(prev => [...new Set([...prev, course_id])]);
                console.log(response);
                navigate(`/${student_id}${path}`);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response.data)
                if (error.response) {
                    setMessage(error.response.data || "Failed to enroll. Please try again.");
                } else {
                    setMessage("An error occurred. Please try again.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex h-screen">
                    <SideBar name={fullName} profilePic={profilePicUrl}/>

                    <main className="ml-[22%] flex-1 bg-gray-100 p-8 overflow-auto">
                        <div className="mb-4">
                            <h2 className="text-4xl font-bold text-gray-800">Welcome Back!</h2>
                            <p className="text-gray-600 mt-2 text-lg">
                                Start your coding journey.
                            </p>
                        </div>

                        {message && (
                            <div className="text-red-500 mb-4">
                                {message}
                            </div>
                        )}

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {Courses.map(course => {
                                const isEnrolled = enrolledCourses.includes(course.course_id);

                                return (
                                    <div
                                        className="bg-white p-4 shadow rounded hover:scale-105 transform transition-all duration-300"
                                        key={course.course_id}
                                    >
                                        <p className="text-2xl font-semibold">{course.name}</p>
                                        <button
                                            
                                            className={`text-white rounded-md p-2 w-fit text-lg ${isEnrolled ? 'bg-blue-500 hover:bg-blue-800' : 'bg-rose-600 hover:bg-rose-800'}`}
                                            onClick={() => isEnrolled ? navigate(`/${student_id}${course.path}`) : handleEnrollment(course)}>
                                            {isEnrolled ? "Continue" : "Enroll"}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </main>
                </div>
            )}
        </>
    );
};




export default CoursesPage;
