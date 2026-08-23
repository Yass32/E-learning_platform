import { useState } from 'react';
import { FaCode } from "react-icons/fa";
import backgroundAurora from '../assets/aurora-background.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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


        axios.post(`${VITE_BACKEND_URL}/students/register`, user)
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

    if (loading) return <Loading/>;

    return (
        <div className="flex w-screen h-screen bg-ink-950">
            {/* Branding panel */}
            <div className="hidden lg:flex relative w-1/2 h-full items-center justify-center bg-cover bg-center overflow-hidden"
                style={{backgroundImage: `url('${backgroundAurora}')`,}}>
                <div className="absolute inset-0 bg-gradient-to-br from-ink-950/90 via-ink-950/70 to-rose-900/60"></div>
                <div className="relative z-10 max-w-md text-left px-10">
                    <Link to="/" className="flex items-center gap-2 mb-10">
                        <FaCode className="text-rose-500 text-3xl" />
                        <span className="text-cloud text-xl font-bold tracking-tight">Code Ed</span>
                    </Link>
                    <h1 className="text-4xl font-extrabold text-cloud leading-tight mb-4">
                        Start your coding journey today.
                    </h1>
                    <p className="text-mist text-lg">
                        Interactive lessons, real coding exercises, and AI-powered feedback — all in one place, completely free.
                    </p>
                </div>
            </div>

            {/* Form panel */}
            <div className="flex flex-1 items-center justify-center px-6 py-12 bg-surface overflow-y-auto">
                <div className="w-full max-w-sm">
                    <FaCode className="text-rose-600 size-12 mx-auto mb-4 lg:hidden" />
                    <h2 className="text-3xl text-ink-900 font-extrabold mb-1 text-center">
                    Create your account
                    </h2>
                    <p className="text-gray-500 text-center mb-8">Join Code Ed for free.</p>

                    <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="name">
                            Full Name
                            </label>
                            <input type="text" id="name" placeholder="Enter your name"
                            value={fullName} onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
                            Email Address
                            </label>
                            <input type="email" id="email" placeholder="Enter your email address"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
                            Password
                            </label>
                            <input type="password" id="password" placeholder="Enter your password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                            />
                        </div>

                        {message && <p className='text-sm text-red-600'>{message}</p>}

                        {/* Submit Button */}
                        <button type="button"
                        className="w-full py-2.5 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-all duration-200 shadow-sm" onClick={handleLogin}>
                            Sign up
                        </button>

                        <p className="pt-4 text-center text-sm text-gray-500">
                            Already a member?{' '}
                            <Link to="/login" className="font-semibold text-rose-600 hover:text-rose-800">
                            Sign in here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
