import developerImage from '../assets/portfolio_1.jpg';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white shadow-md relative">
      {/* Developer Image with Border Effect */}
      <div className="relative w-52 h-52 rounded-full overflow-hidden group shadow-lg border-4 border-gray-300 mt-12 hover:border-[#3bd1a6] transition-all duration-300">
        <img
          src={developerImage}
          alt="Zach Jordan"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <h1 className="text-5xl font-extrabold mt-6 text-gray-800">Hey, I'm Sam Smith</h1>
      <p className="text-2xl mt-3 text-gray-600 max-w-2xl text-center px-4">
        Welcome to my portfolio! Here, you can explore my projects and see what I’ve been working on. I strive to create meaningful things with ❤️
      </p>
      
      <div className="mt-6">
        {/* Button with Hover Effect */}
        <button className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md hover:border-4 hover:border-[#3bd1a6] hover:text-[#3bd1a6]">
          Check My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
