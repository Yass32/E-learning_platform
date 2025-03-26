// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed w-full h-10 bg-transparent backdrop-blur-md z-10">
            <div className="flex justify-between items-center w-full px-6 mt-2">
                {/* Logo */}
                <FaCode className="text-white text-2xl" id="logo" />
                {/* Log in Button */}
                <Link to="/login"
                className="bg-rose-600 px-4 rounded-lg hover:bg-rose-800 transition-all duration-200">
                    <span className="text-white text-sm">Log in</span>
                </Link>
            </div>
      </nav>
    )
  }
  
  export default Navbar