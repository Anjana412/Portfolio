import React from 'react'
import imgg from './images/me.png';
// import imgg from './images/p3.jpeg';
import bgimg from './images/whitebg.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress,SiTailwindcss,SiPython, SiBootstrap,SiC } from 'react-icons/si';




const About = () => {

 const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-200" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'C', icon: <SiC className="text-blue-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700 dark:text-white" /> },
];

const education = [
  {
    title: 'Internship in Full-Stack Web Development Using MERN',
    year: '2025 June',
    place: 'Softronic, Calicut,kerala',
    desc: 'Completed 6 Month Internship in advanced topics such as Full Stack development ,UI development and Data Structures.'
  },
  {
    title: 'BSC Computer Science',
    year: '2025 March',
    place: 'Co-operative arts and science college,Pilathara,Kannur',
    desc: 'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering and Web development.'
  },
];
  return (

    <div id="about" className="bg-black min-h-screen py-6 pt-10 text text-left">
      <h1 className="text-5xl font-bold mb-10 text-center text-white">About Me!</h1>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-10 gap-10">
        <div className="md:w-1/2 text-white">
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm Anjana T, a passionate fullstack web developer who loves turning ideas into interactive web experiences.
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

        <div className="md:w-1/2 flex justify-center">
          <img
            src={imgg}
            alt="Anjana"
            className="h-[300px] w-[300px] rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>


     

    <div className="w-full flex flex-col items-center py-20">
    <h2 className="text-4xl font-bold mb-10 text-white text-center">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center w-52 h-56 border-2 border-white rounded-lg shadow-lg bg-black transition duration-300 group hover:scale-110 hover:shadow-2xl"
        >
          <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
            {skill.icon}
          </div>
          <span className="text-white text-lg font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>



      <div className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold mb-8 text-white">Education</h2>
      <div className="relative max-w-4xl w-full">
        <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-fuchsia-500 to-orange-400"></div>
        <div className="space-y-8">
          {education.map((ed, idx) => (
            <div key={ed.year} className="flex items-center">
              <div className="z-10">
                <span className="block w-6 h-6 bg-white border-4 border-fuchsia-500 rounded-full"></span>
              </div>
              <div className="ml-8 bg-black border border-white rounded-lg p-5 shadow-lg w-[1800px]">
                <div className="text-fuchsia-400 font-bold text-xl mb-1">{ed.title}</div>
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

  )
}

export default About