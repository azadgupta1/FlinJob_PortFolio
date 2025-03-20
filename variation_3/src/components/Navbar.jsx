import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track scrolling and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset to detect early

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-lg shadow-md rounded-full px-8 py-3 flex items-center justify-between max-w-4xl w-full z-50">
  {/* Logo */}
  <a href="#" className="font-bold text-lg text-gray-900 tracking-wide">MyPortfolio</a>

  {/* Desktop Menu */}
  <div className="hidden md:flex gap-6 text-gray-900">
    {["about", "experience", "projects", "contact"].map((section) => (
      <a
        key={section}
        href={`#${section}`}
        className={`relative hover:text-[#FF5F6D] transition-all duration-300 ${
          activeSection === section ? "text-black font-semibold" : ""
        }`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
        {activeSection === section && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 bottom-0 h-[2px] w-full bg-black"
          />
        )}
      </a>
    ))}
  </div>

  {/* Mobile Menu Button */}
  <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X size={26} /> : <Menu size={26} />}
  </button>

  {/* Mobile Menu */}
  {isOpen && (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute top-16 left-0 w-full bg-white shadow-md rounded-xl py-4 flex flex-col items-center gap-4 md:hidden"
    >
      {["about", "experience", "projects", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setIsOpen(false)}
          className={`text-gray-900 text-lg hover:text-[#FF5F6D] transition-all duration-300 ${
            activeSection === section ? "text-[#4A90E2] font-semibold" : ""
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </motion.div>
  )}
</nav>

  );
};

export default Navbar;
