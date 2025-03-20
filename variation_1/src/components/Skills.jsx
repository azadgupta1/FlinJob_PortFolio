const skills = [
    { name: "JavaScript", level: "85%" },
    { name: "C++ (DSA)", level: "90%" },
    { name: "Node.js & Express", level: "80%" },
    { name: "Next.js", level: "75%" },
    { name: "Prisma & PostgreSQL", level: "80%" },
    { name: "Tailwind CSS", level: "85%" },
  ];
  
  const Skills = () => (
    <section
      id="skills"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-8 md:px-16"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 animate-fade-in">
          Skills
        </h2>
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="relative group">
              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-3 text-yellow-300">{skill.name}</h3>
  
              {/* Skill Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
  
              {/* Percentage Display */}
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-yellow-300 font-semibold">
                {skill.level}
              </div>
  
              {/* Hover Effect for Detail */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-sm text-yellow-300">
                <p className="text-center">
                  Expert in {skill.name} with focus on building robust applications.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Skills;
  