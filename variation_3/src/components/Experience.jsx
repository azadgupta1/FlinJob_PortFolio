import { motion } from "framer-motion";
import { Briefcase, Circle } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Corp",
    date: "2022 - Present",
    description: "Developing scalable web applications using React, Node.js, and PostgreSQL.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    date: "2020 - 2022",
    description: "Designed and implemented UI/UX for high-profile clients with React and Tailwind CSS.",
  },
  {
    role: "Intern Developer",
    company: "Startup Hub",
    date: "2019 - 2020",
    description: "Built and optimized web pages, improving performance and accessibility.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
      <div className="relative border-l-4 border-gray-300 ml-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 relative hover:scale-[1.02] transition-transform"
          >
            <div className="absolute -left-6 top-2">
              <Circle className="w-6 h-6 text-[#3bd1a6] bg-white p-1 rounded-full shadow-lg" />
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#3bd1a6]" />
                {exp.role}
              </h3>
              <p className="text-gray-600 text-sm">{exp.company} • {exp.date}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
