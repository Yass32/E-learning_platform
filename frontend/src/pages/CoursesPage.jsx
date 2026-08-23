import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Loading from '../components/Loading';
import axios from 'axios';
import { FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { LuArrowRight } from 'react-icons/lu';

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
        { "name": "Python", "course_id": 1, "path": "/python/module1/lesson1", icon: FaPython, color: "from-sky-500 to-emerald-500" },
        { "name": "JavaScript", "course_id": 2, "path": "/javascript/module1/lesson1", icon: SiJavascript, color: "from-yellow-400 to-amber-500" },
        { "name": "Java", "course_id": 3, "path": "/java/module1/lesson1", icon: FaJava, color: "from-orange-500 to-red-600" }
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

                    <main className="ml-[22%] flex-1 bg-surface p-10 overflow-auto">
                        <div className="mb-8">
                            <h2 className="text-4xl font-extrabold text-ink-900">Welcome back{fullName ? `, ${fullName.split(' ')[0]}` : ''}!</h2>
                            <p className="text-gray-500 mt-2 text-lg">
                                Start your coding journey.
                            </p>
                        </div>

                        {message && (
                            <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6">
                                {message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Courses.map(course => {
                                const isEnrolled = enrolledCourses.includes(course.course_id);
                                const Icon = course.icon;

                                return (
                                    <div
                                        className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                                        key={course.course_id}
                                    >
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 shadow-md`}>
                                            <Icon className="text-white text-2xl" />
                                        </div>
                                        <p className="text-xl font-bold text-ink-900 mb-1">{course.name}</p>
                                        <p className="text-sm text-gray-400 mb-5">
                                            {isEnrolled ? "Continue where you left off" : "Start learning from the basics"}
                                        </p>
                                        <button
                                            className={`flex items-center gap-2 rounded-lg px-4 py-2 w-fit text-sm font-semibold transition-all duration-200 ${
                                                isEnrolled
                                                    ? 'bg-ink-900 text-white hover:bg-ink-800'
                                                    : 'bg-rose-600 text-white hover:bg-rose-700'
                                            }`}
                                            onClick={() => isEnrolled ? navigate(`/${student_id}${course.path}`) : handleEnrollment(course)}>
                                            {isEnrolled ? "Continue" : "Enroll"}
                                            <LuArrowRight className="group-hover:translate-x-0.5 transition-transform" />
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
