const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-white text-2xl font-bold cursor-pointer">PORTFOLIO</h1>
        <ul className="flex space-x-6 text-white">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-500 cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
