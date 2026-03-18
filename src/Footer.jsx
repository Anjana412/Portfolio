import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white py-10 px-4 text-center shadow-lg relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-widest text-purple-400 drop-shadow-lg">
          Stay Connected
        </h2>
        <p className="mb-6 text-base font-semibold text-gray-300">
          &copy; {year} Anjana T. All rights reserved.
        </p>
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10">
          {[
            { href:'https://twitter.com/',   label:'Twitter',   icon:<FaTwitter size={28} /> },
            { href:'https://instagram.com/', label:'Instagram', icon:<FaInstagram size={28} /> },
            { href:'https://github.com/Anjana412',      label:'GitHub',    icon:<FaGithub size={28} /> },
            { href:'https://www.linkedin.com/in/anjana-t-480863352', label:'LinkedIn', icon:<FaLinkedinIn size={28} /> },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="transition-transform transform hover:scale-110 hover:text-purple-400"
              style={{ textShadow:'0 0 8px rgba(128,0,128,0.7)' }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-purple-600 animate-pulse opacity-70" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 animate-pulse opacity-70" />
    </footer>
  );
};

export default Footer;