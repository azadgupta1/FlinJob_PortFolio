// import developerImage from '../assets/portfolio_1.jpg';

// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center bg-white shadow-md relative">
//       {/* Developer Image with Border Effect */}
//       <div className="relative w-52 h-52 rounded-full overflow-hidden group shadow-lg border-4 border-gray-300 mt-12 hover:border-[#3bd1a6] transition-all duration-300">
//         <img
//           src={developerImage}
//           alt="Zach Jordan"
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//       </div>
      
//       <h1 className="text-5xl font-extrabold mt-6 text-gray-800">Hey, I'm Sam Smith</h1>
//       <p className="text-2xl mt-3 text-gray-600 max-w-2xl text-center px-4">
//         Welcome to my portfolio! Here, you can explore my projects and see what I’ve been working on. I strive to create meaningful things with ❤️
//       </p>
      
//       <div className="mt-6">
//         {/* Button with Hover Effect */}
//         <button className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md hover:border-4 hover:border-[#3bd1a6] hover:text-[#3bd1a6]">
//           Check My Work
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import developerImage from "../assets/portfolio_1.jpg";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-white shadow-md relative px-4 pt-16 sm:pt-24 overflow-hidden">
      {/* Profile Image */}
      <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden group shadow-lg border-4 border-gray-300 mt-12 hover:border-[#3bd1a6] transition-all duration-300">
        <img
          src={developerImage}
          alt="Sam Smith"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 text-gray-800 text-center leading-tight">
        Hey, I'm Sam Smith
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl mt-3 text-gray-600 max-w-md sm:max-w-2xl text-center px-2 leading-relaxed">
        Welcome to my portfolio! Here, you can explore my projects and see what I’ve been working on. I strive to create meaningful things with ❤️
      </p>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md hover:border-4 hover:border-[#3bd1a6] hover:text-[#3bd1a6] text-sm sm:text-base">
          Check My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;



