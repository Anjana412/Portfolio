import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white py-12 px-6 text-center shadow-lg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 tracking-widest text-purple-400 drop-shadow-lg">
          Stay Connected
        </h2>
        <p className="mb-8 text-lg font-semibold select-none text-gray-300 drop-shadow-md">
          &copy; {year} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-10">
          {[{
            href:"https://twitter.com/YOUR_HANDLE",
            label:"Twitter",
            icon:<FaTwitter size={32} />
          },{
            href:"https://instagram.com/YOUR_HANDLE",
            label:"Instagram",
            icon:<FaInstagram size={32} />
          },{
            href:"https://github.com/YOUR_HANDLE",
            label:"GitHub",
            icon:<FaGithub size={32} />
          },{
            href:"https://linkedin.com/in/YOUR_HANDLE",
            label:"LinkedIn",
            icon:<FaLinkedinIn size={32} />
          }].map(({href,label,icon})=>(
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-transform transform hover:scale-110 hover:text-purple-400"
              style={{textShadow: "0 0 8px rgba(128, 0, 128, 0.7)"}}
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 animate-pulse opacity-70" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 animate-pulse opacity-70" />
      </div>
    </footer>
  );
};

export default Footer;
