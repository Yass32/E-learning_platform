// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import backgroundAurora from '../assets/aurora-background.png';
import background2 from '../assets/background2.png';
import background3 from '../assets/laptopimage.png';
import { MdOutlineFeedback } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { BsBarChartLine } from "react-icons/bs";


const HomePage = () => {
  return (
    <>
        <div name='home' className="relative flex w-screen h-screen bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundImage})`,}}>

            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950 z-10"></div>

            {/* Navbar */}
            <Navbar className="relative z-20" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl text-center px-6 m-auto">
                <span className="text-rose-400 font-semibold tracking-widest text-sm uppercase mb-4">Learn by building</span>
                <p className="text-5xl md:text-6xl font-extrabold text-cloud mb-6 leading-tight">
                    Learn Programming Through Practice
                </p>
                <p className="text-lg text-mist mb-8 max-w-xl mx-auto">
                    Immerse yourself in an interactive learning journey, apply your knowledge through hands-on coding exercises, and receive personalized AI-powered support along the way.
                </p>
                <Link to="/register"
                className="bg-rose-600 px-8 py-3 rounded-lg hover:bg-rose-500 hover:shadow-glow transition-all duration-200">
                    <span className="text-white font-semibold text-lg">Get Started — It&apos;s Free</span>
                </Link>
            </div>
        </div>

        <div name='home2' className="relative flex w-screen min-h-screen bg-cover bg-center py-24"
        style={{backgroundImage: `url(${backgroundAurora})`,}}>

            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-ink-950/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-[90%] max-w-6xl text-left m-auto">
                <p className="text-4xl font-bold text-cloud mb-4">
                    Real-time Feedback And Auto Grading
                </p>
                <p className="text-mist text-lg mb-12 max-w-2xl">Get the tools you need to learn faster and code with confidence.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-mist text-lg">
                    {[
                        { icon: MdOutlineFeedback, title: 'Instant Feedback', desc: 'Receive immediate feedback on your code as you write, with syntax highlighting, error messages, and debugging suggestions.' },
                        { icon: RiRobot2Line, title: 'Automated Grading', desc: 'Our AI-powered system automatically grades your assignments, providing accurate and consistent evaluations of your progress.' },
                        { icon: BsBarChartLine, title: 'Detailed Reports', desc: 'Track your performance with detailed reports on your code, areas for improvement, and overall progress.' },
                    ].map((item, index) => (
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-rose-600/50 transition-colors duration-300" key={index}>
                            <item.icon className='text-rose-500 size-8 mb-4'/>
                            <span className='block font-bold text-cloud text-xl mb-2'>{item.title}</span>
                            <span className='block text-sm text-mist leading-relaxed'>{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div name='home3' className="relative flex w-screen min-h-screen bg-cover bg-center bg-ink-900 py-24"
        style={{backgroundImage: `url(${background2})`,}}>
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-ink-950/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-[90%] max-w-6xl text-left m-auto">
                <p className="text-4xl font-bold text-cloud mb-4">
                    Hands-on Coding Assignments
                </p>
                <p className="text-mist text-lg mb-12 max-w-2xl">Learn by doing, not just reading — every module is built around real practice.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg"> {[
                    {title: 'Real-World Projects', description: 'Build practical applications and projects to solidify your understanding and gain valuable experience.' },
                    {title: 'Personalized Feedback', description: 'Receive personalized feedback on your assignments from experienced instructors to help you grow and refine your skills.'},
                    {title: 'Project-Based Learning', description: 'Build challenging projects that simulate real-world scenarios and allow you to apply your knowledge in a practical setting.'}
                    ].map((item, index) => (
                        <div className="p-6 text-balance bg-gradient-to-br from-rose-500 to-rose-800 rounded-xl shadow-lg shadow-rose-950/40 hover:-translate-y-1 transition-transform duration-300 ease-in-out" key={index}>
                            <span className='block font-bold text-white text-xl mb-2'>{item.title}</span>
                            <span className='text-rose-50/90 text-sm leading-relaxed'>{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <div name='home4' className="relative flex w-screen min-h-screen bg-cover bg-center bg-ink-900 py-24"
        style={{backgroundImage: `url(${backgroundAurora})`,}}>
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-ink-950/70 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-[90%] max-w-6xl m-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    {/* Left Section: Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={background3}
                            alt="Laptop with code"
                            className="w-full max-w-[480px] object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="flex flex-col w-full">
                        <h2 className="text-4xl font-bold text-cloud pb-8">Supported Languages</h2>
                        <div className="relative border-l-2 border-rose-600/60 text-lg"> {[
                            {title: 'Java', description: 'Master the fundamentals of object-oriented programming with Java, a robust and widely used language.' },
                            {title: 'JavaScript', description: 'Bring interactivity to web pages with JavaScript, a powerful scripting language used for web development.' },
                            {title: 'Python', description: 'Learn Python, a versatile and beginner-friendly language used for web development, data science, and automation.' }
                            ].map((item, index) => (
                                <div key={index} className="mb-10 last:mb-0 ml-6">
                                    <div className="absolute -left-4 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md shadow-rose-900/40">
                                        {index + 1}
                                    </div>
                                    <p className="font-bold text-cloud">{item.title}</p>
                                    <p className="text-mist text-base leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div name="last_page" className="relative flex flex-col w-screen min-h-[70vh] bg-gradient-to-b from-ink-950 to-rose-700">

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-[80%] max-w-3xl text-center mx-auto py-24">
                <p className="text-4xl font-bold text-cloud mb-4">
                    Join Our Community of Aspiring Developers
                </p>
                <p className="text-lg text-mist mb-8">
                    Connect with a vibrant community of fellow learners, share insights, ask questions, and collaborate on projects.
                </p>
                <Link to="/register"
                className="bg-white text-rose-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-cloud transition-all duration-200 shadow-lg">
                    Create Your Free Account
                </Link>
            </div>

            {/* Footer */}
            <footer className="w-full text-rose-100/80 text-xs py-6 border-t border-white/10">
                <div className="max-w-screen-lg mx-auto flex justify-between items-center px-6">
                    <p>© 2026 Code Ed. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#privacy" className="hover:underline hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:underline hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline hover:text-white transition-colors">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    </>
  )
}

export default HomePage
