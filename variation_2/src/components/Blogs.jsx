// import { useState } from "react";
// import { motion } from "framer-motion";

// // Importing Images Correctly
// import myjourney from "../assets/myJourney1.png";
// import reactpng from "../assets/reactpng.png";
// import tl from "../assets/tl.png";

// // Sample Static Blog Data
// const sampleArticles = [
//   {
//     id: 1,
//     title: "Mastering React Hooks",
//     description: "Learn how to use React hooks efficiently with real-world examples.",
//     cover_image: reactpng, // ✅ Correct: Directly assign the imported image
//     url: "#",
//     tag_list: ["tech"],
//   },
//   {
//     id: 2,
//     title: "Understanding Tailwind CSS",
//     description: "A complete guide to getting started with Tailwind CSS for modern UI design.",
//     cover_image: tl, // ✅ Correct: Directly use the imported image
//     url: "#",
//     tag_list: ["guides"],
//   },
//   {
//     id: 3,
//     title: "My Journey as a Developer",
//     description: "Sharing my experience and lessons learned in the software development world.",
//     cover_image: myjourney, // ✅ Correct: Directly use the imported image
//     url: "#",
//     tag_list: ["personal"],
//   },
// ];

// const categories = ["All", "Tech", "Guides", "Personal"];

// const Blog = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredArticles =
//     selectedCategory === "All"
//       ? sampleArticles
//       : sampleArticles.filter((article) => article.tag_list.includes(selectedCategory.toLowerCase()));

//   return (
//     <div id="articles" className="py-16 px-6 bg-white text-gray-900">
//       <h2 className="text-4xl font-extrabold text-center mb-8">Latest Articles</h2>

//       {/* Category Filter Buttons */}
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

//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredArticles.map((article) => (
//           <motion.div
//             key={article.id}
//             className="p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src={article.cover_image}
//               alt={article.title}
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="mt-4 text-xl font-bold">{article.title}</h3>
//             <p className="text-gray-600 mt-2">{article.description}</p>
//             <a
//               href={article.url}
//               className="mt-2 inline-block text-[#3bd1a6] font-semibold"
//             >
//               Read More →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import { useState } from "react";
import { motion } from "framer-motion";
import myjourney from "../assets/myJourney1.png";
import reactpng from "../assets/reactpng.png";
import tl from "../assets/tl.png";

const sampleArticles = [
  { id: 1, title: "Mastering React Hooks", description: "Learn how to use React hooks efficiently.", cover_image: reactpng, url: "#", tag_list: ["tech"] },
  { id: 2, title: "Understanding Tailwind CSS", description: "A complete guide to Tailwind CSS.", cover_image: tl, url: "#", tag_list: ["guides"] },
  { id: 3, title: "My Journey as a Developer", description: "Sharing my lessons in dev world.", cover_image: myjourney, url: "#", tag_list: ["personal"] },
];

const categories = ["All", "Tech", "Guides", "Personal"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? sampleArticles 
    : sampleArticles.filter((article) => article.tag_list.includes(selectedCategory.toLowerCase()));

  return (
    <div id="articles" className="py-8 sm:py-16 px-4 sm:px-6 bg-white text-gray-900">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8">Latest Articles</h2>

      {/* Category Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-2 sm:space-x-4 mb-6 sm:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-md sm:text-lg font-semibold transition-all duration-300 ${
              selectedCategory === category ? "bg-[#3bd1a6] text-white shadow-lg" : "bg-gray-200 text-gray-900 hover:bg-[#3bd1a6] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredArticles.map((article) => (
          <motion.div
            key={article.id}
            className="p-3 sm:p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={article.cover_image} alt={article.title} className="w-full h-40 sm:h-48 object-cover rounded-md" />
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold">{article.title}</h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm">{article.description}</p>
            <a href={article.url} className="mt-1 sm:mt-2 inline-block text-[#3bd1a6] font-semibold text-sm sm:text-md">
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

