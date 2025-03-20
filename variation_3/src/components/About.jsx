import { motion } from "framer-motion";
import DeveloperImg from "../assets/P_Photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          I'm a passionate developer who thrives on building innovative and efficient web solutions.
          I specialize in full-stack development, working with **React, Node.js, PostgreSQL, and Tailwind CSS.**
        </motion.p>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.img
            src={DeveloperImg}
            alt="Profile"
            className="w-46 h-40 rounded-full object-cover shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Skills and Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[ 
              { title: "Full-Stack Development", desc: "React, Node.js, Express, PostgreSQL" },
              { title: "UI/UX Enthusiast", desc: "Designing beautiful & user-friendly interfaces" },
              { title: "Problem Solver", desc: "Optimizing performance & debugging complex issues" },
              { title: "Continuous Learner", desc: "Always exploring the latest tech trends" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="bg-gray-100 p-6 rounded-xl shadow-md text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


