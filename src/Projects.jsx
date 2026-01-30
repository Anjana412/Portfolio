import React from 'react'
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
      link: "/",
    },
    {
      name: "Portfolio Site",
      image: img3,
      description: "A personal portfolio website built with HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS.",
      link: "https://portfolio-anjana-ts-projects.vercel.app/",
    },
  ];

  return (

    <div id='project' className="bg-black min-h-screen pt-32 pb-16 px-6 md:px-20">
      <h1 className="text-5xl font-bold text-center mb-16 text-white">My Projects</h1>
      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.name}
            className="group bg-zinc-900/50 border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2" >
            <div className="overflow-hidden rounded-lg w-full mb-6">
              <img src={proj.image}  alt={proj.name}
                className="object-cover w-full h-52 group-hover:scale-110 transition-transform duration-500"/>
            </div>

            <h2 className="text-2xl font-bold text-fuchsia-500 mb-3">{proj.name}</h2>
            <p className="text-gray-300 text-center mb-8 line-clamp-3">  {proj.description} </p>

            <a href={proj.link} target="_blank" rel="noopener noreferrer"
              className="mt-auto w-full text-center bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-all active:scale-95">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects