import React from 'react';
import img2 from './images/travelapro.png';
import img3 from './images/portfoliopro.png';
import img4 from './images/fragrnziaporoject.png';

const Projects = () => {
  const projects = [
    {
      name:'Fragranzia',
      image:img4,
      description:'A weather forecasting app using OpenWeatherMap API, React, and responsive design.',
      link:'https://anjana412.github.io/fragranzia/',
    },
    {
      name:'Travela',
      image:img2,
      description:'A personal portfolio website showcasing projects, skills, and contact forms, built with React and Tailwind CSS.',
      link:'/',
    },
    {
      name:'Portfolio Site',
      image:img3,
      description:'A personal portfolio website built with HTML, CSS, Bootstrap, JavaScript, React, and Tailwind CSS.',
      link:'https://portfolio-anjana-ts-projects.vercel.app/',
    },
  ];

  return (
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr; gap: 20px; padding: 0 16px; }
        }
      `}</style>

      <div id="project" className="bg-black min-h-screen pt-24 pb-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-14 text-white">My Projects</h1>
        <div className="projects-grid">
          {projects.map(proj => (
            <div
              key={proj.name}
              className="group bg-zinc-900/50 border border-white/10 rounded-2xl shadow-xl p-5 flex flex-col items-center hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-lg w-full mb-5">
                <img
                  src={proj.image} alt={proj.name}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold text-fuchsia-500 mb-3 text-center">{proj.name}</h2>
              <p className="text-gray-300 text-center mb-6 text-sm leading-relaxed line-clamp-3">{proj.description}</p>
              <a
                href={proj.link} target="_blank" rel="noopener noreferrer"
                className="mt-auto w-full text-center bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-all active:scale-95 text-sm"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;