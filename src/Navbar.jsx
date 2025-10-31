import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-scroll";




const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between  bg-black  pt-10 ">
    <div className="flex items-center ">
        <span className="text-white text-4xl font-bold ps-20">Anjana</span>
        <span className="text-fuchsia-500 text-4xl font-bold ml-1">T</span>
      </div>
      <nav className="flex gap-10 items-center ps-80">
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white text-lg relative cursor-pointer hover:text-fuchsia-400"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white text-lg hover:text-fuchsia-400 transition cursor-pointer"
        >
          About Me
        </Link>    
        <Link
          to="project"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white text-lg hover:text-fuchsia-400 transition cursor-pointer"
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white text-lg hover:text-fuchsia-400 transition cursor-pointer"
        >
          Contact
        </Link>
        <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-emerald-500 rounded-full transition text-3xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Anjana412" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition text-3xl">
          <FaGithub />
        </a>
      </nav>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
      >
        <button className="bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white font-medium px-7 py-2 mr-10 rounded-full shadow hover:scale-105 transition">
          Connect With Me
        </button>
      </Link>
      </div>
      
  )
}

export default Navbar