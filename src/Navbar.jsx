import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [nav]);

  const navLinks = [
    { id:1, to:'portfolio', name:'Home' },
    { id:2, to:'about',     name:'About Me' },
    { id:3, to:'project',   name:'Projects' },
    { id:4, to:'contact',   name:'Contact' },
  ];

  return (
    <>
      <style>{`
        .nav-connect-btn {
          background: linear-gradient(to right, #d946ef, #f97316);
          color: white; font-weight: 700;
          padding: 8px 20px; border-radius: 999px;
          box-shadow: 0 4px 14px rgba(0,0,0,.3);
          transition: transform .2s, opacity .2s;
          border: none; cursor: pointer; font-size: 14px;
          white-space: nowrap;
        }
        .nav-connect-btn:hover { transform: scale(1.05); opacity: .9; }
        .nav-connect-btn:active { transform: scale(.97); }

        @media (max-width: 400px) {
          .nav-logo-text { font-size: 1.6rem !important; }
        }
      `}</style>

      <header
        className={`fixed w-full z-[100] transition-all duration-300 px-4 sm:px-8 md:px-14
          ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-black py-5'}`}
      >
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">

          {/* logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <span className="nav-logo-text text-white text-3xl md:text-4xl font-bold">Anjana</span>
            <span className="nav-logo-text text-fuchsia-500 text-3xl md:text-4xl font-bold ml-1">T</span>
          </div>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8">
              {navLinks.map(({ id, to, name }) => (
                <li key={id}>
                  <Link to={to} smooth duration={500} offset={-100}
                    className="text-white text-base hover:text-fuchsia-400 transition-all cursor-pointer font-medium">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 border-l border-zinc-800 pl-6">
              <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noreferrer"
                className="text-sky-600 hover:text-fuchsia-400 transition-transform hover:scale-110">
                <FaLinkedin size={26} />
              </a>
              <a href="https://github.com/Anjana412" target="_blank" rel="noreferrer"
                className="text-gray-300 hover:text-fuchsia-400 transition-transform hover:scale-110">
                <FaGithub size={26} />
              </a>
            </div>
            <Link to="contact" smooth duration={500} offset={-100}>
              <button className="nav-connect-btn ml-2">Connect With Me</button>
            </Link>
          </nav>

          {/* hamburger */}
          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden z-[110] text-white p-1"
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* mobile drawer */}
        <div className={`
          fixed top-0 right-0 h-screen w-full sm:w-[65%] bg-black z-[105]
          flex flex-col items-center justify-center gap-8
          transition-transform duration-500 ease-in-out
          ${nav ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {navLinks.map(({ id, to, name }) => (
            <Link key={id} onClick={() => setNav(false)} to={to}
              smooth duration={500} offset={-100}
              className="text-2xl text-white hover:text-fuchsia-500 font-bold cursor-pointer transition-colors">
              {name}
            </Link>
          ))}
          <Link to="contact" smooth duration={500} offset={-100} onClick={() => setNav(false)}>
            <button className="nav-connect-btn mt-2">Connect With Me</button>
          </Link>
          <div className="flex gap-8 mt-4">
            <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noreferrer" className="text-sky-500 text-4xl"><FaLinkedin /></a>
            <a href="https://github.com/Anjana412" target="_blank" rel="noreferrer" className="text-white text-4xl"><FaGithub /></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;