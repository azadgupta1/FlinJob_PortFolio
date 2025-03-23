// import { motion } from "framer-motion";
// import DeveloperImg from "../assets/P_Photo.jpg"; // Importing your image

// const Hero = () => {
//   return (
//     <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#FFBB98] to-[#FF9D6F] text-white relative overflow-hidden">
//       <div className="grid md:grid-cols-2 gap-10 px-10 md:px-20 py-10 max-w-screen-xl mx-auto">
//         {/* Left Section */}
//         <div className="text-center md:text-left">
//           <motion.h1
//             className="text-6xl font-bold"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Hello, I'm <span className="text-[#4A4A4A]">Ethan</span>
//           </motion.h1>
          
//           <motion.p
//             className="mt-6 text-lg text-gray-800"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             Crafting clean, modern, and user-friendly web experiences.
//           </motion.p>
          
//           <motion.a
//             href="#projects" // Make sure to link to your resume section or file
//             className="mt-6 inline-block px-8 py-4 bg-[#4A4A4A] text-[#FFBB98] text-lg font-semibold rounded-full shadow-lg hover:bg-[#333333] transition"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             View My Work
//           </motion.a>
//         </div>

//         {/* Right Section (Image with Animation) */}
//         <div className="relative flex justify-center items-center">
//           <motion.img
//             src={DeveloperImg} // Add your image here
//             alt="Your Name"
//             className="w-80 h-80 rounded-full object-cover shadow-lg"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import DeveloperImg from "../assets/P_Photo.jpg"; // Importing your image
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#FFBB98] to-[#FF9D6F] text-white relative overflow-hidden pt-20 md:pt-0">
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-10 max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <span className="text-[#4A4A4A]">Ethan</span>
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 text-base md:text-lg text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Crafting clean, modern, and user-friendly web experiences.
          </motion.p>

          <motion.a
            href="#projects"
            className="mt-4 inline-block px-6 md:px-8 py-3 md:py-4 bg-[#4A4A4A] text-[#FFBB98] text-base md:text-lg font-semibold rounded-full shadow-lg hover:bg-[#333333] transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            View My Work
          </motion.a>
        </div>

        {/* Right Section (Image with Animation) */}
        <div className="relative flex justify-center items-center">
          <motion.img
            src={DeveloperImg}
            alt="Your Name"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


