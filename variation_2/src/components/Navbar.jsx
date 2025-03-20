const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#3bd1a6] p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Portfolio Text */}
        <a href="#top" className="text-3xl font-extrabold text-gray-900">
          PORTFOLIO
        </a>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
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
          className="text-3xl cursor-pointer border-4 border-gray-900 px-8 py-1 rounded-md hover:bg-gray-900 hover:text-white"
          onClick={() => alert("Contact Me")}
        >
          Contact Me
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
