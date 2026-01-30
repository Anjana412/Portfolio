import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import imgg from './images/me.png'
import { Link } from 'react-scroll';


const Portfolio = () => {
  return (

    <div id='portfolio' className="bg-black min-h-screen px-8 pt-40 pb-24 font-sans">
      <main className="flex flex-col items-center">
        <img src={imgg} className="rounded-full w-48 h-48 object-cover border-4 border-gray-800 shadow-lg mb-8"
        />
        <p className="text-emerald-500 font-serif font-bold text-2xl mb-2">
          Hey there!
        </p>
        <h1 className="text-5xl font-bold text-center mb-6">

          <span className="text-fuchsia-500">I'm</span>{" "}
          <span className="text-fuchsia-500 ">Anjana </span>{" "}
          <span className="text-orange-400">T,</span>{" "}
          <span className="text-white">A Fullstack Developer</span>
        </h1>
        <p className="text-white text-center text-lg mb-10 max-w-2xl">
          A passionate full-stack developer. I love crafting seamless digital experiences from front to back. Dive in and explore my world of code and creativity!        </p>
        <div className="flex space-x-6">
          <Link
              to="contact"
                smooth={true}
                    duration={500}
                    offset={-70} className="bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:scale-105 transition">
            Connect with me
          </Link>
          <a href="/Anjana-T_resume.pdf" target="_blank" rel="noopener noreferrer"
            className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
          > My Resume</a>
        </div>
      </main>
    </div>
  )
}

export default Portfolio