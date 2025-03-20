const experiences = [
    {
      role: "Software Developer Intern",
      company: "Goldman Sachs",
      duration: "Jan 2024 - Jun 2024",
      description: "Worked on financial data pipelines, improved system efficiency by 15%.",
    },
    {
      role: "Backend Developer",
      company: "Freelance Project",
      duration: "Jul 2024 - Present",
      description: "Built a full-stack social media app with Prisma, PostgreSQL, and Node.js.",
    },
  ];
  
  const Experience = () => (
    <section id="experience" className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-8 text-yellow-500">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-yellow-500 pl-4 hover:bg-gray-800 transition duration-300 p-4 rounded-md shadow-lg"
          >
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <h4 className="text-lg text-yellow-300">{exp.company}</h4>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Experience;
  