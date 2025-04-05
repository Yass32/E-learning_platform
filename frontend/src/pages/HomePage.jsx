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
            <div className="absolute inset-0 bg-[#0D0A2C] bg-opacity-50 z-10"></div>

            {/* Navbar */}
            <Navbar className="relative z-20" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-[60%] text-center p-6 m-auto">            
                <p className="text-4xl font-bold text-[#F2F0F4] mb-4">
                    Code Ed: Learn Programming Through Practice
                </p>
                <p className="text-lg text-[#DCD7E5] mb-6">
                    Immerse yourself in an interactive learning journey, where you will apply your knowledge through practical coding exercises and recieve personalized support. 
                </p>
                <Link to="/register"
                className="bg-rose-600 text-center px-3 py-1 rounded-md hover:bg-rose-800 transition-all duration-200 animate-bounce ">
                    <span className="text-white font-semibold">Get Started</span>
                </Link>
            </div>
        </div>

        <div name='home2' className="relative flex w-screen h-screen bg-cover bg-center"
        style={{backgroundImage: `url(${backgroundAurora})`,}}>
            
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-[#0D0A2C] bg-opacity-50 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 w-[80%] text-left p-6 m-auto">            
                <p className="text-4xl font-bold text-[#F2F0F4] mb-4">
                    Real-time Feedback And Auto Grading
                </p>
                <div className="grid grid-cols-3 gap-4 text-[#DCD7E5] text-lg">
                    <p className="p-2"> 
                        <MdOutlineFeedback className='text-rose-600 size-7'/>
                        <span className='block font-bold'>Instant Feedback</span>
                        <span className='block font-thin '>Receive immediate feedback on your code as you write, with syntax highlighting, error messages, and debugging suggestions.</span> 
                    </p>
                    <p className="p-2"> 
                        <RiRobot2Line className='text-balance text-xs text-rose-600 size-7'/>
                        <span className='block font-bold'>Automated Grading</span>
                        <span className='block font-thin '>Our AI-powered system automatically grades your assignments, providing accurate and consistent evaluations of your progress.</span> 
                    </p>
                    <p className="p-2"> 
                        <BsBarChartLine className='text-balance text-xs text-rose-600 size-7'/>
                        <span className='block font-bold'>Detailed Reports</span>
                        <span className='block font-thin '>Track your performance with detailed reports on your code, areas for improvement, and overall progress.</span> 
                    </p>
                </div>
            </div>
        </div>

        <div name='home3' className="relative flex w-screen h-screen bg-cover bg-center bg-[#0D0A2C]"
        style={{backgroundImage: `url(${background2})`,}}>
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-[#0D0A2C] bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-[80%] text-left p-6 m-auto">             
                <p className="text-4xl font-bold text-[#F2F0F4]  mb-4">
                    Hands-on Coding Assignments
                </p>
                <div className="grid grid-cols-3 gap-4 text-[#DCD7E5] text-lg"> {[
                    {title: 'Real-World Projects', description: 'Build practical applications and projects to solidify your understanding and gain valuable experience.' },
                    {title: 'Personalized Feedback', description: 'Receive personalized feedback on your assignments from experienced instructors to help you grow and refine your skills.'},
                    {title: 'Project-Based Learning', description: 'Build challenging projects that simulate real-world scenarios and allow you to apply your knowledge in a practical setting.'}
                    ].map((item, index) => (
                        <p className="p-3 text-balance text-xs bg-gradient-to-r from-[#581CA0]  to-[#371C9C] rounded-md shadow-lg hover:scale-105 transition duration-700 ease-in-out" key={index}>                         
                            <span className='block font-bold'>{item.title}</span>
                            <span className='font-thin'>{item.description}</span> 
                        </p>
                    ))}
                </div>
            </div>
        </div>


        <div name='home4' className="relative flex w-screen h-screen bg-cover bg-center bg-[#0D0A2C]"
        style={{backgroundImage: `url(${backgroundAurora})`,}}>
            {/* Overlay to dim the background */}
            <div className="absolute inset-0 bg-[#0D0A2C] bg-opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-[80%] text-left p-6 m-auto">
                <div className='grid grid-cols-2 gap-4'>
                    {/* Left Section: Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={background3}
                            alt="Laptop with code"
                            className="w-[80%] max-w-[500px] object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Right Section: Content */}
                    <div className="flex flex-col items-center w-full ">
                        <h2 className="text-4xl font-bold text-[#F2F0F4] py-4">Supported Languages:</h2>
                        <div className="relative border-l-2 border-rose-600 text-lg"> {[
                            {title: 'Java', description: 'Master the fundamentals of object-oriented programming with Java, a robust and widely used language.' },
                            {title: 'JavaScript', description: 'Bring interactivity to web pages with JavaScript, a powerful scripting language used for web development.' },
                            {title: 'Python', description: 'Learn Python, a versatile and beginner-friendly language used for web development, data science, and automation.' }
                            ].map((item, index) => (
                                <div key={index} className="mb-28 ml-6">
                                    <div className="absolute -left-4 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center text-white">
                                        {index + 1}
                                    </div>
                                    <p className=" font-bold text-[#DCD7E5]">{item.title}</p>
                                    <p className="font-thin text-[#DCD7E5]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>   
            </div>
        </div>

        <div name="last_page" className="relative flex flex-col w-screen h-screen bg-[#0D0A2C] bg-gradient-to-b from-darkPurple to-rose-600 ">
        
            {/*<div className="absolute inset-0 bg-[#0D0A2C] bg-opacity-50 z-10"></div>*/}

            {/* Content */}
            <div className="relative z-20  flex flex-col items-center justify-center w-[70%] text-left p-6 m-auto top-11">            
                <p className="text-4xl font-bold text-[#F2F0F4] mb-4">
                    Join Our Community of Aspiring Developers
                </p>
                <p className="text-lg text-[#DCD7E5]">
                    Connect with a vibrant community of fellow learners, share insights, ask questions, and collaborate on projects.
                </p>
            </div>

            {/* Footer */}
            <footer className="w-full text-[#bab1c3] text-xs py-6">
                <div className="max-w-screen-lg mx-auto flex justify-between items-center px-6">
                    <p>© 2024 Code Ed. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:underline">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            {/*<footer className="relative z-20 w-full bg-rose-600 text-center  mt-auto">
                <p className=" text-xs font-thin text-black">
                    © 2024 Code Ed. All Rights Reserved.
                </p>
            </footer>*/}
        </div>





    </>
  )
}

export default HomePage
/*


 */