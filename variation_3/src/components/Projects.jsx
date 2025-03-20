import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AI_image from '../assets/aiImage.png';
import E_image from '../assets/ecommerce.png';
import P_image from '../assets/portfolio.png';


const projects = [
  { 
    title: "AI Debugger", 
    description: "An AI-powered debugging tool that helps developers detect and fix issues in real time.", 
    image: AI_image,
    liveLink: "#",
    githubLink: "#"
  },
  { 
    title: "E-Commerce App", 
    description: "A full-stack online store with payment integration and a seamless shopping experience.", 
    image: E_image,
    liveLink: "#",
    githubLink: "#"
  },
  { 
    title: "Portfolio Website", 
    description: "A beautifully designed personal portfolio showcasing skills and projects.", 
    image: P_image,
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#FFBB98] to-[#FF9D6F]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                
                <div className="flex gap-4 mt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#3bd1a6] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#34b993] transition">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700 transition">
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
