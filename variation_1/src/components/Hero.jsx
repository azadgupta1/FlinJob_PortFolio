// import developerImage from '../assets/Developer1.jpg';

// const Hero = () => {
//     return (
//       <section
//         id="hero"
//         className="h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col md:flex-row items-center justify-center p-8"
//       >
//         {/* Left Content */}
//         <div className="text-center md:text-left max-w-lg">
//           <h1 className="text-5xl font-bold text-white leading-tight mb-4 animate-fade-in">
//             Hi, I'm <span className="text-yellow-400">John Carter</span>
//           </h1>
//           <p className="text-lg text-gray-400 mb-6 animate-slide-in">
//             Aspiring Software Developer | Full Stack Engineer | DSA Enthusiast
//           </p>
//           <a
//             href="#projects"
//             className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
//           >
//             View My Work
//           </a>
//         </div>
  
//         {/* Right Content - Image */}
//         <div className="mt-8 md:mt-0 md:ml-12 flex justify-center items-center">
//           <div className="relative w-60 h-60 md:w-80 md:h-80">
//             <img
//               src={developerImage}
//               alt="Your Profile"
//               className="rounded-full object-cover w-full h-full border-4 border-yellow-500 shadow-xl animate-zoom-in"
//             />
//             <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500 rounded-full animate-ping"></div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Hero;
  

import developerImage from '../assets/Developer1.jpg';

const Hero = () => {
    return (
      <section
        id="hero"
        className="h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col md:flex-row items-center justify-center p-8 pt-20 md:pt-0" // Added padding-top for small screens
      >
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-tight mb-4 animate-fade-in">
            Hi, I'm <span className="text-yellow-400">John Carter</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6 animate-slide-in">
            Aspiring Software Developer | Full Stack Engineer | DSA Enthusiast
          </p>
          <a href="#projects" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            View My Work
          </a>
        </div>

        <div className="mt-8 md:mt-0 md:ml-12 flex justify-center items-center">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <img
              src={developerImage}
              alt="Your Profile"
              className="rounded-full object-cover w-full h-full border-4 border-yellow-500 shadow-xl animate-zoom-in"
            />
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>
    );
};

export default Hero;

