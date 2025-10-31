import React from 'react'
import img1 from './images/fragranziapro.png';
import img2 from './images/travelapro.png';
import img3 from './images/portfoliopro.png';
import img4 from './images/fragrnziaporoject.png';




const Projects = () => {
    const projects = [
  {
    name: "Fragranzia",
    image: img4,
    description: "A weather forecasting app using OpenWeatherMap API, React, and responsive design.",
    link: "https://anjana412.github.io/fragranzia/",
  },
  {
    name: "Travela",
    image: img2,
    description: "A personal portfolio website showcasing projects, skills, and contact forms, built with React and Tailwind CSS.",
    link: "https://anjana412.github.io/fragranzia/",
  },
  {
    name: "Portfolio Site",
    image: img3,
    description: "A personal portfolio website showcasing projects, skills, and contact forms, built with html,css,bootstrap, javascript,React and Tailwind CSS,etc",
    link: "https://anjana412.github.io/fragranzia/",
  },
];


  return (
    <div id='project' className="bg-black min-h-screen py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-white">My Projects</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj) => (
  <div
    key={proj.name}
    className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
  >
    <img
      src={proj.image}
      alt={proj.name}
      className="rounded-lg object-cover w-full h-52 mb-4"
    />
    <h2 className="text-xl font-bold text-fuchsia-500 mb-2">{proj.name}</h2>
    <p className="text-white text-center mb-6">{proj.description}</p>
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold shadow hover:scale-105 transform transition"
    >
      Visit Project
    </a>
  </div>
        ))}
      </div>
    </div>
  )
}

export default Projects