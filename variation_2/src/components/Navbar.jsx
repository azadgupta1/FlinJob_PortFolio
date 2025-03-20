// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full bg-[#3bd1a6] p-4 shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Portfolio Text */}
//         <a href="#top" className="text-3xl font-extrabold text-gray-900">
//           PORTFOLIO
//         </a>
        
//         {/* Navigation Links */}
//         <div className="flex space-x-8">
//           <a 
//             href="#projects" 
//             className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
//           >
//             Projects
//           </a>
//           <a 
//             href="#experience" 
//             className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
//           >
//             Experience
//           </a>
//           <a 
//             href="#articles" 
//             className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
//           >
//             Articles
//           </a>
//         </div>
        
//         {/* Contact Me Button */}
//         <span
//           className="text-3xl cursor-pointer border-4 border-gray-900 px-8 py-1 rounded-md hover:bg-gray-900 hover:text-white"
//           onClick={() => alert("Contact Me")}
//         >
//           Contact Me
//         </span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu when hamburger icon is clicked
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#3bd1a6] p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Portfolio Text */}
        <a href="#top" className="text-3xl font-extrabold text-gray-900">
          PORTFOLIO
        </a>

        {/* Hamburger Icon for mobile view */}
        <div className="lg:hidden flex items-center" onClick={toggleMobileMenu}>
          <button className="text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8">
          <a
            href="#projects"
            className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            Experience
          </a>
          <a
            href="#articles"
            className="text-3xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            Articles
          </a>
        </div>

        {/* Contact Me Button */}
        <span
          className="hidden lg:block text-3xl cursor-pointer border-4 border-gray-900 px-8 py-1 rounded-md hover:bg-gray-900 hover:text-white"
          onClick={() => alert("Contact Me")}
        >
          Contact Me
        </span>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#3bd1a6] p-4">
          <a
            href="#projects"
            className="block text-3xl font-bold text-gray-900 py-2 hover:bg-gray-900 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block text-3xl font-bold text-gray-900 py-2 hover:bg-gray-900 hover:text-white"
          >
            Experience
          </a>
          <a
            href="#articles"
            className="block text-3xl font-bold text-gray-900 py-2 hover:bg-gray-900 hover:text-white"
          >
            Articles
          </a>
          <span
            className="block text-3xl cursor-pointer border-4 border-gray-900 px-8 py-1 rounded-md hover:bg-gray-900 hover:text-white mt-4"
            onClick={() => alert("Contact Me")}
          >
            Contact Me
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
