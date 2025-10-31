import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center font-sans px-4">
      <h1 className="text-5xl text-white font-bold px-6 py-2 mb-10 text-center w-full max-w-xl mx-auto">
        Connect with me!
      </h1>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-start justify-center gap-20 py-10">
        
        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <span className="text-xl font-medium text-gray-100 px-3 py-1 inline-block">
            Get in touch
          </span>
          <span className="text-base bg-zinc-800 text-gray-300 rounded-md px-3 py-1 inline-block shadow">
            Email : <a href="mailto:anjanat0001@gmail.com" className="underline">anjanat0001@gmail.com</a>
          </span>
          <span className="text-base bg-zinc-800 text-gray-300 rounded-md px-3 py-1 inline-block shadow">
            Phone : +91 9656307973
          </span>

          <div className="flex gap-4 mt-3 ms-24">
            <a href="https://github.com/Anjana412" aria-label="GitHub" target="_blank" rel="noopener noreferrer"
              className="bg-zinc-800 rounded-full p-2 text-gray-400 hover:text-gray-100 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anjana-t-480863352" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
              className="bg-zinc-800 rounded-full p-2 text-gray-400 hover:text-blue-600 transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://twitter.com/YOUR_HANDLE" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
              className="bg-zinc-800 rounded-full p-2 text-gray-400 hover:text-sky-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com/YOUR_HANDLE" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
              className="bg-zinc-800 rounded-full p-2 text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
          </div>
          
        </div>

        <form className="md:w-1/2 w-full flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black border border-gray-500 rounded py-2 px-3 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-violet-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-500 rounded py-2 px-3 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-violet-400"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full bg-black border border-gray-500 rounded py-2 px-3 text-gray-300 placeholder-gray-400 h-[120px] resize-none focus:outline-none focus:border-violet-400"
          />
          <button
            type="submit"
            className="self-start px-6 py-2 rounded border border-gray-500 text-gray-200 bg-zinc-900 hover:bg-violet-950 transition duration-150"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
