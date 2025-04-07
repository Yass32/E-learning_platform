import { useState } from 'react';
import { FaCode } from "react-icons/fa";
import backgroundAurora from '../assets/aurora-background.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import { BACKEND_URL } from '../config';

const RegisterPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const user = { full_name: fullName, email: email, password: password };

        console.log("Sending register request with data:", user); // Debug payload

        setLoading(true);

    
        axios.post(`${BACKEND_URL}/students/register`, user)
        .then((response) => {
            setLoading(false);
            console.log(response.data);
            navigate(`/${response.data.registeredStudentId}/profilepage`);
        })
        .catch((error) => {
            console.log(error);
            if (error.response) {
                setMessage(error.response.data.message || "An error occurred. Please try again.");
            } else {
                setMessage("An error occurred. Please try again.");
            }
            setLoading(false);
            })
    }

    
    return (
        <>
            {loading? (<Loading/>) : (
                <div className="relative flex items-center justify-center w-screen h-screen bg-cover bg-center" 
                style={{backgroundImage: `url('${backgroundAurora}')`,}}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    
                    {/* Login Card */}
                    <div className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-5 w-full max-w-md shadow-lg">
                        <FaCode className="text-rose-600 size-16 mx-auto" id="logo" />
                        <h2 className="text-3xl text-white font-semibold mb-4 text-center">
                        Sign up for an account
                        </h2>
    
                        <form className="flex flex-col space-y-3 text-xl">
                            {/* Name Field */}
                            <div>
                                <label className="block text-white mb-1" htmlFor="name">
                                Full Name
                                </label>
                                <input type="text" id="name" placeholder="Enter your name"
                                value={fullName} onChange={(e) => setFullName(e.target.value)}
                                className="w-full p-1 rounded-md bg-white bg-opacity-70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
        
                            {/* Surname Field */}
                            <div>
                                <label className="block text-white mb-1" htmlFor="surname">
                                Email Address
                                </label>
                                <input type="email" id="email" placeholder="Enter your email address"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-1 rounded-md bg-white bg-opacity-70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

        
                            {/* Password Field */}
                            <div>
                                <label className="block text-white mb-1" htmlFor="password">
                                Password
                                </label>
                                <input type="password" id="password" placeholder="Enter your password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-1 rounded-md bg-white bg-opacity-70 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
        
                            {/* Submit Button */}
                            <p className='mb-3 text-red-600'>{message}</p>
                            <button type="button"
                            className="w-full p-2 bg-rose-600 text-white font-bold rounded-md hover:bg-rose-700 transition duration-300" onClick={handleLogin}>
                                Sign up
                            </button>
        
                            <p className="mt-10 text-center text-sm/6 text-gray-500">
                                Already a member?{' '}
                                <Link to="/login" className="font-semibold text-rose-600 hover:text-rose-800">
                                Sign in here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>

            )}
            
        </>
    )
}

export default RegisterPage