// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-ink-950/80 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <FaCode className="text-rose-500 text-3xl transition-transform duration-300 group-hover:-rotate-6" />
                    <span className="text-cloud text-xl font-bold tracking-tight">Code Ed</span>
                </Link>
                {/* Log in Button */}
                <Link to="/login"
                className="bg-rose-600 px-5 py-2 rounded-lg font-semibold text-white text-sm shadow-md shadow-rose-900/30 hover:bg-rose-500 hover:shadow-glow transition-all duration-200">
                    Log in
                </Link>
            </div>
      </nav>
    )
  }

  export default Navbar
