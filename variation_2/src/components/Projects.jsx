import img1 from '../assets/project_1.png';
import img2 from '../assets/project_2.avif';
import img3 from '../assets/project_3.jpeg';

const projects = [
  { 
    name: "Real-time Chat Application", 
    desc: "A fully functional real-time chat app using WebSockets", 
    img: img1, 
    link: "pendulum-city.html" 
  },
  { 
    name: "Task Management Tool", 
    desc: "Efficient task tracking and collaboration tool for teams", 
    img: img2, 
    link: "https://www.boycottbuddy.app/" 
  },
  { 
    name: "Weather Forecast App", 
    desc: "An app that provides real-time weather information", 
    img: img3, 
    link: "https://www.exampleproject.com" 
  },
];

const Projects = () => {
  return (
    <div id="projects" className="p-4 md:pt-24 pb-26 xl:p-20 bg-[#010121] text-white">
      <div className="sm:w-12/12 md:w-12/12 col-centered">
        <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">My Projects</div>
        <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
          I love to create things, and I'm always working on something new! You can view some of my favorite projects below.
        </div>

        <div className="grid grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a href={project.link} target="_blank" className="kill-link-style">
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease-in-out hover:shadow-xl shadow-md p-4 w-full h-auto border-4 border-gray-900 rounded-lg transform hover:translate-y-2">
                  
                  {/* Image (Now at the Top) */}
                  <div className="w-full h-64 flex items-center justify-center">
                    <img src={project.img} alt={project.name} className="rounded-md mt-2 mb-4 h-full w-full object-cover" />
                  </div>

                  {/* Text (Now Below the Image) */}
                  <div className="text-left">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">{project.name}</span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">{project.desc}</div>
                  </div>

                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
