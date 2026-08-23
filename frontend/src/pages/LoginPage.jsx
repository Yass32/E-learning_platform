import { useState } from 'react';
import { FaCode } from "react-icons/fa";
import backgroundAurora from '../assets/aurora-background.png';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const user = { email: email, password: password };

        console.log("Sending login request with data:", user); // Debug payload

        setLoading(true);

        let url = `${VITE_BACKEND_URL}/students/login`;

        axios.post(url, user)
        .then((response) => {
            setLoading(false);
            const userId = response.data.student_id
            console.log(response.data);
            navigate(`/${userId}/coursespage`);
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
                        Welcome back, builder.
                    </h1>
                    <p className="text-mist text-lg">
                        Pick up right where you left off — your lessons, progress, and code are waiting for you.
                    </p>
                </div>
            </div>

            {/* Form panel */}
            <div className="flex flex-1 items-center justify-center px-6 py-12 bg-surface">
                <div className="w-full max-w-sm">
                    <FaCode className="text-rose-600 size-12 mx-auto mb-4 lg:hidden" />
                    <h2 className="text-3xl text-ink-900 font-extrabold mb-1 text-center">
                        Sign in to your account
                    </h2>
                    <p className="text-gray-500 text-center mb-8">Continue your coding journey.</p>

                    <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
                            Email
                            </label>
                            <input type="text" id="email" placeholder="you@example.com"
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
                        <button
                            type="button"
                            className="w-full py-2.5 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-all duration-200 shadow-sm"
                            onClick={handleLogin}>
                            Sign in
                        </button>

                        <p className="pt-4 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="/register" className="font-semibold text-rose-600 hover:text-rose-800" >
                            Sign up here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
