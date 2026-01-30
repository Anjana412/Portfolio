import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 1, to: "portfolio", name: "Home" },
    { id: 2, to: "about", name: "About Me" },
    { id: 3, to: "project", name: "Projects" },
    { id: 4, to: "contact", name: "Contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-300
        px-6 md:px-20 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-xl" : "bg-black py-8"}`} >
      <div className="flex justify-between items-center w-full">
        
        <div className="flex items-center flex-shrink-0 cursor-pointer">
          <span className="text-white text-3xl md:text-4xl font-bold">Anjana</span>
          <span className="text-fuchsia-500 text-3xl md:text-4xl font-bold ml-1">T</span>
        </div>

        <nav className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10">
            {navLinks.map(({ id, to, name }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-white text-lg hover:text-fuchsia-400 transition-all cursor-pointer font-medium"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 border-l border-zinc-800 pl-8">
            <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noreferrer" 
               className="text-sky-600 hover:text-fuchsia-400 transition-transform hover:scale-110">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Anjana412" target="_blank" rel="noreferrer" 
               className="text-gray-300 hover:text-fuchsia-400 transition-transform hover:scale-110">
              <FaGithub size={30} />
            </a>
          </div>

          <Link to="contact" smooth duration={500} offset={-100}>
            <button className="bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white font-bold px-8 py-2 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 ml-4">
              Connect With Me
            </button>
          </Link>
        </nav>

        <div onClick={() => setNav(!nav)} className="lg:hidden cursor-pointer z-[110] text-white">
          {nav ? <FaTimes size={32} /> : <FaBars size={32} />}
        </div>

        <div className={`
          fixed top-0 right-0 h-screen w-full sm:w-[60%] bg-black z-[105] flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-in-out
          ${nav ? "translate-x-0" : "translate-x-full"}
        `}>
          {navLinks.map(({ id, to, name }) => (
            <Link
              key={id}
              onClick={() => setNav(false)}
              to={to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-3xl text-white hover:text-fuchsia-500 font-bold cursor-pointer"
            >
              {name}
            </Link>
          ))}
          
          <div className="flex gap-10 mt-6">
            <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noreferrer" className="text-sky-500 text-5xl"><FaLinkedin /></a>
            <a href="https://github.com/Anjana412" target="_blank" rel="noreferrer" className="text-white text-5xl"><FaGithub /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;