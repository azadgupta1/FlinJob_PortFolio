// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";
// import reactcertificate from '../assets/reactcertificate.png';
// import uipng from '../assets/uipng.png';
// import mshackathon from '../assets/mshackathon.png'

// // Sample Data
// const achievements = [
//   {
//     title: "React Developer Certification",
//     category: "Certifications",
//     image: reactcertificate,
//     link: "/certificates/react-cert.pdf",
//   },
//   {
//     title: "Best UI Design Award 2024",
//     category: "Awards",
//     image: uipng,
//     link: "/certificates/ui-award.pdf",
//   },
//   {
//     title: "Hackathon Finalist",
//     category: "Events",
//     image: mshackathon,
//     link: "/certificates/hackathon.pdf",
//   },
// ];

// const categories = ["All", "Certifications", "Awards", "Events"];

// const Certifications = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredAchievements =
//     selectedCategory === "All"
//       ? achievements
//       : achievements.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="py-16 px-6 bg-white text-gray-900">
//       <h2 className="text-4xl font-extrabold text-center mb-8">Certifications & Achievements</h2>

//       {/* Filter Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ${
//               selectedCategory === category
//                 ? "bg-[#3bd1a6] text-white shadow-lg"
//                 : "bg-gray-200 text-gray-900 hover:bg-[#3bd1a6] hover:text-white"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Achievement Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredAchievements.map((item, index) => (
//           <motion.div
//             key={index}
//             className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
//             <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
//             <a
//               href={item.link}
//               download
//               className="mt-2 inline-flex items-center text-[#3bd1a6] font-semibold"
//             >
//               <FaDownload className="mr-2" /> Download
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import reactcertificate from '../assets/reactcertificate.png';
import uipng from '../assets/uipng.png';
import mshackathon from '../assets/mshackathon.png'

// Sample Data
const achievements = [
  {
    title: "React Developer Certification",
    category: "Certifications",
    image: reactcertificate,
    link: "/certificates/react-cert.pdf",
  },
  {
    title: "Best UI Design Award 2024",
    category: "Awards",
    image: uipng,
    link: "/certificates/ui-award.pdf",
  },
  {
    title: "Hackathon Finalist",
    category: "Events",
    image: mshackathon,
    link: "/certificates/hackathon.pdf",
  },
];

const categories = ["All", "Certifications", "Awards", "Events"];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-8 px-4 bg-white text-gray-900">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-6">Certifications & Achievements</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#3bd1a6] text-white shadow-lg"
                : "bg-gray-200 text-gray-900 hover:bg-[#3bd1a6] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAchievements.map((item, index) => (
          <motion.div
            key={index}
            className="p-3 sm:p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.title} className="w-full h-32 sm:h-48 object-cover rounded-md" />
            <h3 className="mt-2 sm:mt-4 text-lg sm:text-xl font-bold">{item.title}</h3>
            <a
              href={item.link}
              download
              className="mt-1 sm:mt-2 inline-flex items-center text-[#3bd1a6] font-semibold"
            >
              <FaDownload className="mr-1 sm:mr-2" /> Download
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
