const About = () => {
    return (
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
          {/* Left - Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="text-yellow-500">Full Stack Developer</span> dedicated to building innovative, scalable, and user-friendly web applications.
              I specialize in backend development, crafting high-performance APIs, and designing elegant, responsive frontends.  
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From creating sleek user interfaces with <span className="text-yellow-500">React & Tailwind CSS</span> to architecting robust backends with <span className="text-yellow-500">Node.js, Express, and PostgreSQL</span>, I love turning complex problems into elegant solutions.
            </p>
          </div>
  
          {/* Right - Fancy Image/Code Block Card */}
          <div className="md:w-1/2 flex justify-center items-center animate-slide-in">
            <div className="relative w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full animate-ping"></div>
              <pre className="text-sm font-mono text-yellow-400 whitespace-pre-wrap leading-relaxed">
                {`// My Stack
  const developer = {
    name: "Your Name",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    passion: "Building awesome, scalable web apps",
  };
  
  export default developer;`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  