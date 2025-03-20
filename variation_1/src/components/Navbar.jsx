import { useState } from 'react';

const Navbar = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu when hamburger icon is clicked
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo/Title */}
        <h1 className="text-white text-2xl font-bold cursor-pointer">PORTFOLIO</h1>

        {/* Hamburger icon for mobile view */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu (hidden on mobile) */}
        <ul className="hidden lg:flex space-x-6 text-white">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-500 cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4">
          <ul className="space-y-4 text-white">
            {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="hover:text-yellow-500 cursor-pointer">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
