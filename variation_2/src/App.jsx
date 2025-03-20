import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Certifications from "./components/Achievements";
import Blog from "./components/Blogs";


function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Experience/>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
