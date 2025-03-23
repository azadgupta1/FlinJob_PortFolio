// import { motion } from "framer-motion";

// const experiences = [
//   {
//     company: "Google",
//     role: "Software Engineer",
//     duration: "Jan 2022 - Present",
//     description: "Developing scalable web applications and leading a team to build AI-powered features for Google Search.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   },
//   {
//     company: "Microsoft",
//     role: "Frontend Developer",
//     duration: "Jun 2019 - Dec 2021",
//     description: "Designed and optimized the UI/UX of Microsoft Teams, enhancing accessibility and performance.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//   },
//   {
//     company: "Amazon",
//     role: "Backend Engineer",
//     duration: "Aug 2017 - May 2019",
//     description: "Implemented microservices architecture for Amazon Web Services (AWS), improving system reliability.",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//   },
// ];

// const Experience = () => {
//   return (
//     <div id="experience" className="p-8 md:pt-24 xl:p-20 bg-[#010121] text-white">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Title */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold">Experience</h2>
//           <p className="text-xl md:text-2xl mt-4 text-gray-300">
//             A journey through my professional career.
//           </p>
//         </motion.div>

//         {/* Experience Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {experiences.map((exp, index) => (
//             <motion.div 
//               key={index} 
//               initial={{ opacity: 0, y: 30 }} 
//               animate={{ opacity: 1, y: 0 }} 
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//               className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all"
//             >
//               {/* Company Logo */}
//               <div className="flex justify-center">
//                 <img src={exp.logo} alt={exp.company} className="h-16 mb-4 object-contain" />
//               </div>

//               {/* Job Role */}
//               <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              
//               {/* Company Name */}
//               <h4 className="text-lg text-gray-400">{exp.company}</h4>
              
//               {/* Duration */}
//               <p className="text-sm text-gray-300 mt-2">{exp.duration}</p>

//               {/* Description */}
//               <p className="mt-3 text-gray-300">{exp.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import { motion } from "framer-motion";

const experiences = [
  {
    company: "Google",
    role: "Software Engineer",
    duration: "Jan 2022 - Present",
    description: "Developing scalable web applications and leading a team to build AI-powered features for Google Search.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    company: "Microsoft",
    role: "Frontend Developer",
    duration: "Jun 2019 - Dec 2021",
    description: "Designed and optimized the UI/UX of Microsoft Teams, enhancing accessibility and performance.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    company: "Amazon",
    role: "Backend Engineer",
    duration: "Aug 2017 - May 2019",
    description: "Implemented microservices architecture for Amazon Web Services (AWS), improving system reliability.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="p-4 sm:p-8 md:pt-24 xl:p-20 bg-[#010121] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">Experience</h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-2 text-gray-300">
            A journey through my professional career.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-gray-800 rounded-lg shadow-lg p-4 sm:p-6 cursor-pointer hover:shadow-xl transition-all"
            >
              {/* Company Logo */}
              <div className="flex justify-center">
                <img src={exp.logo} alt={exp.company} className="h-12 sm:h-16 mb-2 sm:mb-4 object-contain" />
              </div>

              {/* Job Role */}
              <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>

              {/* Company Name */}
              <h4 className="text-md sm:text-lg text-gray-400">{exp.company}</h4>

              {/* Duration */}
              <p className="text-xs sm:text-sm text-gray-300 mt-1">{exp.duration}</p>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
