import React from 'react';
import imgg from './images/me.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPython, SiBootstrap, SiC } from 'react-icons/si';

const About = () => {
  const skills = [
    { name:'HTML5',       icon:<FaHtml5 className="text-orange-500" /> },
    { name:'CSS3',        icon:<FaCss3Alt className="text-blue-500" /> },
    { name:'JavaScript',  icon:<FaJs className="text-yellow-400" /> },
    { name:'React',       icon:<FaReact className="text-cyan-400" /> },
    { name:'Node.js',     icon:<FaNodeJs className="text-green-600" /> },
    { name:'MongoDB',     icon:<SiMongodb className="text-green-400" /> },
    { name:'Express',     icon:<SiExpress className="text-gray-200" /> },
    { name:'Tailwind CSS',icon:<SiTailwindcss className="text-teal-400" /> },
    { name:'Python',      icon:<SiPython className="text-yellow-400" /> },
    { name:'Bootstrap',   icon:<SiBootstrap className="text-purple-500" /> },
    { name:'C',           icon:<SiC className="text-blue-400" /> },
    { name:'GitHub',      icon:<FaGithub className="text-gray-300" /> },
  ];

  const education = [
    {
      title:'Internship in Full-Stack Web Development Using MERN',
      year:'2025 June',
      place:'Softronic, Calicut, Kerala',
      desc:'Completed 6 Month Internship in advanced topics such as Full Stack development, UI development and Data Structures.',
    },
    {
      title:'BSC Computer Science',
      year:'2025 March',
      place:'Co-operative Arts and Science College, Pilathara, Kannur',
      desc:'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering and Web Development.',
    },
  ];

  return (
    <>
      <style>{`
        /* ── About responsive ── */
        .about-hero {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          gap: 40px;
          flex-wrap: wrap;
        }
        .about-hero-text { flex: 1 1 300px; }
        .about-hero-img  { flex: 0 0 auto; display: flex; justify-content: center; }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 0 24px;
        }
        .skill-card {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          border: 2px solid white; border-radius: 8px;
          background: black; padding: 20px 12px;
          transition: transform .3s, box-shadow .3s;
          cursor: default;
        }
        .skill-card:hover { transform: scale(1.1); box-shadow: 0 8px 30px rgba(255,255,255,.1); }

        .edu-timeline { max-width: 860px; width: 100%; padding: 0 24px; }

        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
        }
        @media (max-width: 640px) {
          .about-hero { flex-direction: column-reverse; text-align: center; align-items: center; }
          .about-hero-text { display: flex; flex-direction: column; align-items: center; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .skill-card { padding: 16px 8px; }
          .edu-card { width: 100% !important; }
        }
      `}</style>

      <div id="about" className="bg-black min-h-screen py-6 pt-10 text-left">
        <h1 className="text-5xl font-bold mb-10 text-center text-white">About Me!</h1>

        {/* ── bio + photo ── */}
        <div className="about-hero">
          <div className="about-hero-text text-white">
            <p className="text-lg leading-relaxed mb-6">
              Hi, I'm <span className="text-fuchsia-400 font-semibold">Anjana T</span>, a passionate fullstack web developer who loves turning ideas into interactive web experiences.
              I specialize in responsive design, clean code, and creative UI effects. I enjoy solving logic puzzles,
              refining layouts, and building visually engaging websites that reflect strong brand identity.
            </p>
            <div className="flex justify-center gap-6 pt-4 text-3xl">
              <a href="https://www.linkedin.com/in/anjana-t-480863352" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-emerald-500 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Anjana412" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="about-hero-img">
            <img src={imgg} alt="Anjana" className="h-[260px] w-[260px] rounded-lg object-cover shadow-lg" />
          </div>
        </div>

        {/* ── skills ── */}
        <div className="w-full flex flex-col items-center py-16 px-4">
          <h2 className="text-4xl font-bold mb-10 text-white text-center">Skills</h2>
          <div className="skills-grid w-full" style={{ maxWidth: 860 }}>
            {skills.map(skill => (
              <div key={skill.name} className="skill-card group">
                <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <span className="text-white text-base font-semibold text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── education ── */}
        <div className="flex flex-col items-center py-12 px-4">
          <h2 className="text-4xl font-bold mb-8 text-white">Education</h2>
          <div className="edu-timeline relative">
            <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 to-orange-400" />
            <div className="space-y-8">
              {education.map(ed => (
                <div key={ed.year} className="flex items-start">
                  <div className="z-10 mt-1 flex-shrink-0">
                    <span className="block w-6 h-6 bg-white border-4 border-fuchsia-500 rounded-full" />
                  </div>
                  <div className="edu-card ml-8 bg-black border border-white rounded-lg p-5 shadow-lg flex-1">
                    <div className="text-fuchsia-400 font-bold text-lg mb-1">{ed.title}</div>
                    <div className="text-orange-400 font-semibold">{ed.year}</div>
                    <div className="text-white font-medium">{ed.place}</div>
                    <div className="text-gray-300 text-sm mt-2">{ed.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;